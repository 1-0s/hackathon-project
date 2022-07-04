import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import Logo from "../../../public/assets/Lyful.svg";

const FB = <BsFacebook fontSize="17px" color="#B963D8" cursor="pointer" />;
const LN = <BsLinkedin fontSize="17px" color="#B963D8" cursor="pointer" />;
const TW = <BsTwitter fontSize="17px" color="#B963D8" cursor="pointer" />;

const Footer = () => {
  return (
    <footer className="bg-teal-50 px-5 md:px-12 py-12 border-t-[5px] border-white border-solid">
      <section className="flex flex-col md:flex-row md:justify-between">
        <div className="w-3/3 md:w-[30%] mb-5">
          <Image src={Logo} alt="Lyful logo" height="35px" />

          <p className="font-spec text-[12px] md:text-[16px] mt-5">
            We believe staying alive is essential because that’s when goals can
            be made and dream to be achieved.
          </p>
          <p className="font-spec text-[12px] md:text-[16px] mt-4">
            Our AI tools are designed to help you get quick assistance at home.
          </p>
          <p className="font-spec text-[12px] md:text-[16px] mt-4">
            We also connect you to our pool of professional doctors and medical
            practisioners that are ready to help you anywhere you.
          </p>
        </div>

        <div className="w-3/3 flex flex-col mb-5 md:mb-0">
          <h3 className="font-spec uppercase text-pup font-[600] text-[20px] md:text-[24px]">
            tools{" "}
          </h3>
          <Link href="/search">
            <a className="font-spec text-black hover:text-pup text-[12px] md:text-[15px] mt-4 cursor-pointer">
              Symptoms Checker
            </a>
          </Link>
          <Link href="/bmi">
            <a className="font-spec text-black hover:text-pup text-[12px] md:text-[15px] mt-4 cursor-pointer">
              BMI Calculator
            </a>
          </Link>
          <Link href="/">
            <a className="font-spec text-black hover:text-pup text-[12px] md:text-[15px] mt-4 cursor-pointer">
              Book a Doctor
            </a>
          </Link>

          <h3 className="font-spec uppercase text-pup font-[600] text-[20px] md:text-[24px] mt-5">
            Follow us
          </h3>

          <div className="social mt-3">
            <span className="flex gap-3">
              {FB} {LN} {TW}
            </span>
          </div>
        </div>

        <div className="w-3/3 flex flex-col">
          <h3 className="font-spec uppercase text-pup font-[600] text-[20px] md:text-[24px]">
            Company
          </h3>
          <Link href="/register">
            <a className="font-spec text-black hover:text-pup text-[12px] md:text-[15px] mt-4 cursor-pointer">
              Create an account
            </a>
          </Link>
          <Link href="#">
            <a className="font-spec text-black hover:text-pup text-[12px] md:text-[15px] mt-4 cursor-pointer">
              About Us
            </a>
          </Link>
          <Link href="#">
            <a className="font-spec text-black hover:text-pup text-[12px] md:text-[15px] mt-4 cursor-pointer">
              Careers
            </a>
          </Link>

          <Link href="#">
            <a className="font-spec text-black hover:text-pup text-[12px] md:text-[15px] mt-4 cursor-pointer">
              Help Center
            </a>
          </Link>
        </div>
      </section>

      <p className="font-spec text-[12px] md:text-[15px] text-center mt-10">
        &copy; {new Date().getFullYear()} - Lyful by Mind Optimizer
      </p>
    </footer>
  );
};

export default Footer;
