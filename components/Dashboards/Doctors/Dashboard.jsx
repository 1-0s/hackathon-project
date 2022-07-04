import React from "react";
import { MainButton } from "../../Misc/Buttons";

const Overview = () => {
  return (
    <section className="bg-teal-50 pt-10 px-12 md:px-[5rem] pb-10">
      <div className="mt-5">
        <h2 className="font-spec font-[700] text-[18px] md:text-[32px] opacity-60">
          Welcome to Lyful,
          <br />
          We help connect medical professionals like you with people who need
          medical advice and attention.
          <br /> Kindly update your profile to get started
        </h2>

        <MainButton link="/doctor/profile" text=" Kindly update your profile" />
      </div>
    </section>
  );
};

export default Overview;
