import React from "react";
import Image from "next/image";
import { MainButton } from "../../Misc/Buttons";
import HeroImage from "../../../public/assets/HeroImage.svg";

const Hero = () => {
  return (
    <section className="hero bg-teal-50 flex flex-col md:flex-row md:justify-between items-center px-8 md:px-12 pt-12 pb-[4rem]">
      <div className="content w-2/2 md:w-1/2">
        <p className="font-gros font-[700] text-[13px] md:text-[20px]">
          Do you have a symptom you need help with?
        </p>
        <h2 className="font-spec text-[18px] text-gray-500 my-4 md:text-[40px] leading-[120%]">
          Get tailored medical and home remedy ideas from our{" "}
          <span className="text-pup">AI assistance</span>.
        </h2>

        <MainButton
          link="/register"
          text="Start the checkup now"
          styling="text-xs md:text-base"
        />

        <p className="font-gros opacity-60 mt-2 font-[700] text-[10px] md:text-[15px] ">
          It’s FREE and you get result in few seconds!
        </p>
      </div>

      <div className="w-2/2 md:w-1/2 mt-5 flex justify-end md:mt-0">
        <Image src={HeroImage} alt="Mind optimiser logo" />
      </div>
    </section>
  );
};

export default Hero;
