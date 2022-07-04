import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { app } from "../../pages/api/firebase";

const Login = () => {
  const auth = getAuth(app);

  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rememberRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const persistence = rememberRef.current.checked
      ? browserLocalPersistence
      : browserSessionPersistence;

    const user_cred = { email, password };
    if (email && password) {
      setPersistence(auth, persistence).then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((cred) => {
            alert("Signed in successfully as " + cred.user.email);
            router.push("/");

            // reset values
            emailRef.current.value = "";
            passwordRef.current.value = "";
          })
          .catch((error) => {
            alert(error.message);
          });
      });
    }
  };
  return (
    <>
      <section className="bg-teal-50 py-28 grid place-items-center my-auto border-b-[5px] border-white border-solid">
        <div className="text-center">
          <h1 className="mb-5 font-bold text-xl font-spec">
            Welcome back, sign in!
          </h1>

          {/* form */}
          <form className="flex flex-col items-center" onSubmit={submitHandler}>
            <input
              ref={emailRef}
              type="email"
              className="mb-3 w-64 md:w-80 pl-3 font-spec py-2 text-sm outline-none border-solid border-[1px] border-pup"
              placeholder="Email address:"
              required
            />
            <input
              ref={passwordRef}
              type="password"
              className="w-64 md:w-80 pl-3 py-2 font-spec text-sm outline-none border-solid border-[1px] border-pup"
              placeholder="Password:"
              required
            />
            <div className="my-2 w-full flex justify-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                ref={rememberRef}
              />
              <label
                htmlFor="remember"
                className="ml-1 text-sm font-spec font-bold"
              >
                Remember me
              </label>
            </div>
            <button
              className="mt-3 py-[6px] bg-pup text-sm text-white w-[80px] "
              type="submit"
            >
              Login
            </button>
          </form>

          {/* redirection */}
          <p className="text-sm mt-3 font-spec">
            Don&apos;t have an account?
            <span className="text-pup cursor-pointer font-bold font-spec">
              <Link href="/register"> Signup</Link>
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
