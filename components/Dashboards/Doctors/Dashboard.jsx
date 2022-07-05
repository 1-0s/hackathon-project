import React, { useRef } from "react";
import { app } from "../../../pages/api/firebase";
import { getAuth, updateProfile } from "firebase/auth";

const Overview = () => {
  const auth = getAuth(app);
  const nameRef = useRef();

  const updateHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;

    const profile = {
      displayName: name,
      photoURL: "",
    };

    if (name) {
      //   auth
      updateProfile(auth.currentUser, profile)
        .then((cred) => {
          // reset values
          nameRef.current.value = "";
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <>
      <section className="bg-teal-50 pt-10 px-12 md:px-[5rem] pb-10">
        <div className="mt-5">
          <h2 className="font-spec font-[700] text-[18px] md:text-[32px] opacity-60">
            Welcome to Lyful,
            <br />
            We help connect medical professionals like you with people who need
            medical advice and attention.
            <br /> Kindly update your profile to get started
          </h2>

          {/* <MainButton
            link="/doctor/profile"
            text=" Kindly update your profile"
          /> */}
        </div>
      </section>
      <section className="flex flex-col md:flex-row md:w-full justify-between items-center">
        <div className="flex flex-col my-5 h-auto py-4 w-[300px] md:w-[350px] border-solid border-2 border-pup justify-evenly items-center mx-auto">
          <div className="flex flex-col items-center pb-1">
            <h1 className="font-bold text-xl  border-solid border-b-2 border-pup">
              - Profile: -
            </h1>
          </div>

          <div className="mt-3 w-[90%] flex flex-col items-center ">
            <h1 className="font-bold mb-2">Email:</h1>
            <p className="mt-2 border-solid border-2 border-pup px-3 py-1 mb-4">
              {auth.currentUser.email}
            </p>
            <h1 className="font-bold mb-2">Your Name:</h1>
            <p className="mt-2 border-solid border-2 border-pup px-3 py-1 mb-4">
              {auth.currentUser.displayName
                ? auth.currentUser.displayName
                : "User"}
            </p>
          </div>
        </div>
        {/* form */}
        <div className="flex flex-col my-5 py-4 h-[200px] w-300px md:w-[350px] border-solid border-2 border-pup justify-evenly items-center mx-auto">
          <div className="flex flex-col items-center mb-3">
            <h1 className="font-bold text-xl">- Update Name: -</h1>
          </div>
          <form
            onSubmit={updateHandler}
            className="flex flex-col justify-between items-center h-auto p-3 "
          >
            <input
              ref={nameRef}
              type="text"
              name="name"
              id="name"
              placeholder="Name:"
              className="rounded-full mb-2 px-3 py-2 text-black outline-none w-80 border-solid border-2 border-pup"
              required
            />
            <button
              className="mt-3 py-[6px] bg-pup text-sm text-white w-[80px] "
              type="submit"
            >
              Update
            </button>
          </form>
        </div>{" "}
      </section>
    </>
  );
};

export default Overview;
