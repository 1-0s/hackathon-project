import Login from "../../components/Login/Login";
import { AuthContext } from "../../store/auth-context";
import React, { useContext } from "react";
import Link from "next/link";

const UserLogin = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {!authCtx.isLoggedIn ? (
        <Login />
      ) : (
        <div className="bg-teal-50 py-28 grid place-items-center my-auto border-b-[5px] border-white border-solid">
          <h1>Already Logged in!</h1>
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

export default UserLogin;
