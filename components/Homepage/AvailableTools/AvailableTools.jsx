import React from "react";
import Image from "next/image";
import Link from "next/link";
import CheckerIcon from "../../../public/assets/Chatbot.svg";
import SyringeIcon from "../../../public/assets/Catheter.svg";
import WeightIcon from "../../../public/assets/Weight.svg";
import { MainButton } from "../../Misc/Buttons";

export const Tools = ({ Icon, Title, Text }) => {
  return (
    <div className="text-center">
      <Image src={Icon} alt={Title} responsive="true" />
      <h3 className="font-gros font-[700] text-[16px] md:text-[24px]">
        {Title}
      </h3>
      <p className="font-spec text-[15px] md:text-[20px] mt-2">{Text}</p>
    </div>
  );
};

const AvailableTools = () => {
  return (
    <section className="bg-teal-50 mt-8 md:mt-[7rem] text-center px-8 md:px-12 pb-12">
      <h2 className="pt-12 opacity-60 font-spec font-[700] text-[20px] md:text-[32px]">
        Available Tools:
      </h2>
      <div className="tools_rendered flex flex-col md:flex-row justify-center gap-12  mt-10">
        <div>
          <Tools
            Icon={CheckerIcon}
            Title="Symptom Checker"
            Text="Get helpful suggestions on your symptoms"
          />

          <MainButton
            link="/search"
            text="Check now"
            styling="mt-3 text-xs md:py-2"
          />
        </div>

        <div>
          <Tools
            Icon={WeightIcon}
            Title="BMI Calculator"
            Text="Get helpful suggestions on your symptoms"
          />

          <MainButton
            link="/bmi"
            text="Check now"
            styling="mt-3 text-xs md:py-2"
          />
        </div>

        <div>
          <Tools
            Icon={SyringeIcon}
            Title="Book Nearby Doctor"
            Text="Don’t have a doctor, you can get a doctor very close to you"
          />
          <MainButton
            link="/search"
            text="Book now"
            styling="mt-3 text-xs md:py-2"
          />
        </div>
      </div>
    </section>
  );
};

export default AvailableTools;
