import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Lyful.svg";
import { MainButton, PrimaryButton } from "../../Misc/Buttons";
import { AuthContext } from "../../../store/auth-context";
import { app } from "../../../pages/api/firebase";
import { getAuth, signOut } from "firebase/auth";

const Navigation = () => {
  const auth = getAuth(app);
  const authCtx = useContext(AuthContext);

  return (
    <nav className="navbar bg-teal-50 flex justify-between items-center px-5 md:px-12 py-4 ">
      <Link href="/">
        <a>
          <Image src={Logo} alt="Lyful" height="35" />
        </a>
      </Link>

      <div className="nav_buttons flex gap-4">
        {!authCtx.isLoggedIn && <MainButton link="/register" text="Sign up" />}
        {!authCtx.isLoggedIn && <PrimaryButton link="/login" text="Log in" />}
        {authCtx.isLoggedIn && (
          <Link href="/login">
            <button
              className="mt-2 py-[6px] border-[1px] rounded-[5px] bg-pup text-white w-[80px] font-gros text-[16px]"
              onClick={() => {
                signOut(auth);
              }}
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
