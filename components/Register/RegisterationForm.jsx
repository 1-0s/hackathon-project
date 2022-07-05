import React from "react";
import { useRef } from "react";
import { useRouter } from "next/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../pages/api/firebase";

const RegisterationForm = ({ accountType }) => {
  const auth = getAuth(app);
  const router = useRouter();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const birthRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const birth = birthRef.current.value;
    const password = passwordRef.current.value;

    const user_cred = {
      accountType,
      firstName,
      lastName,
      birth,
    };

    if (firstName && lastName && email && birth && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          alert("Successfully signed up as " + cred.user.email);

          if (accountType === "professional") {
            router.push("/doctor/dashboard");
          } else {
            router.push("/search");
          }

          // reset values
          firstNameRef.current.value = "";
          lastNameRef.current.value = "";
          emailRef.current.value = "";
          passwordRef.current.value = "";
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <div className="text-center">
      <h1 className="mb-3 font-spec">Your details:</h1>
      <form className="flex flex-col items-center" onSubmit={submitHandler}>
        <input
          ref={firstNameRef}
          type="text"
          className="mb-3 w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
          placeholder="First Name:"
          minLength="5"
          required
        />

        <input
          ref={lastNameRef}
          type="text"
          className="mb-3 w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
          placeholder="Last Name:"
          minLength="5"
          required
        />
        <input
          ref={emailRef}
          type="email"
          className="mb-3 w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
          placeholder="Email address:"
          required
        />
        <label
          htmlFor="date"
          className="text-xs text-gray-500 self-start mb-2 ml-1 font-spec"
        >
          Date of birth:
        </label>
        <input
          ref={birthRef}
          type="date"
          id="date"
          defaultValue="1960-01-01"
          // min="2018-01-01"
          max="2010-12-31"
          className="mb-3 font-spec w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
          required
        />
        <input
          ref={passwordRef}
          type="password"
          className="w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
          placeholder="Password:"
          minLength="7"
          required
        />
        <button
          className="mt-3 py-[6px] bg-pup text-sm font-spec text-white w-[80px] "
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterationForm;
