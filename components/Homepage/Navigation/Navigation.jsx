import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Lyful.svg";
import { MainButton, PrimaryButton } from "../../Misc/Buttons";

const Navigation = () => {
  return (
    <nav className="navbar bg-teal-50 flex justify-between px-5 md:px-12 pt-5">
      <Link href="/">
        <a>
          <Image src={Logo} alt="Mind optimiser logo" width="121" height="40" />
        </a>
      </Link>

      <div className="nav_buttons flex gap-4">
        <MainButton link="/register" text="Sign up" />
        <PrimaryButton link="/login" text="Log in" />
      </div>
    </nav>
  );
};

export default Navigation;
