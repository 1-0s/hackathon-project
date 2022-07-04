import Register from "../../components/Register/Register";
import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import Link from "next/link";

const UserRegistration = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {!authCtx.isLoggedIn ? (
        <Register />
      ) : (
        <div className="bg-teal-50 py-28 grid place-items-center my-auto border-b-[5px] border-white border-solid">
          <h1>Already Registered!</h1>
          <Link href="/">
            <button className="mt-2 py-[6px] border-[1px] rounded-[5px] bg-pup text-white w-[80px] font-gros text-[16px]">
              Go home
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default UserRegistration;
