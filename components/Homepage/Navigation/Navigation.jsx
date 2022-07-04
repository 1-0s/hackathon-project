import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Lyful.svg";
import { MainButton, PrimaryButton } from "../../Misc/Buttons";

const Navigation = () => {
  return (
    <nav className="navbar bg-teal-50 flex justify-between items-center px-5 md:px-12 py-4 ">
      <Link href="/">
        <a>
          <Image src={Logo} alt="Lyful" height="35" />
        </a>
      </Link>

      <div className="nav_buttons flex gap-4">
        <MainButton link="/register" text="Sign up" />
        <PrimaryButton link="/login" text="Log in" />
        <MainButton link="#" text="Logout" />
      </div>
    </nav>
  );
};

export default Navigation;
