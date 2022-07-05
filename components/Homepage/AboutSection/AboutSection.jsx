import React from "react";
import Image from "next/image";
import DoctorImage from "../../../public/assets/BodyImage.svg";
import { MainButton } from "../../Misc/Buttons";

const AboutSection = () => {
  return (
    <section className="about_section flex md:flex-row justify-center gap-20 items-center px-8 pt-8 md:px-12 md:pt-20">
      <div className="about_image hidden md:flex md:justify-start md:w-1/2 h-[450px]">
        {/* <Image src={DoctorImage} alt="" responsive /> */}
      </div>

      <div className="content md:w-1/2">
        <h3 className="font-gros font-[700] text-[18px] md:text-[32px]">
          Being healthy is not a choice,
          <br /> it’s a neccessity with Lyful
        </h3>
        <p className="font-spec text-[16px] opacity-60 my-4 md:text-[25px] leading-[120%]">
          We use artificial intelligence to curate data from the most reliable
          resources to help you get the best medical and home remedy suggestions
          you need.
        </p>
        <p className="font-spec text-[16px] opacity-60 my-4 md:text-[25px] leading-[120%]">
          {" "}
          Without leaving your home or office, this tool can serve as your
          personal doctor.
        </p>

        <MainButton text="Get Started &rarr;" link="/search" width="100px" />
      </div>

      <style jsx>
        {`
          .about_image {
            background: url("../../../assets/BodyImage.svg") no-repeat;
            background-position: top center;
            background-size: cover;
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
