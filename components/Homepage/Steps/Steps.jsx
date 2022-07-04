import React from "react";

export const Point = ({ Number, Title, Text }) => {
  return (
    <div className="flex gap-5 w-2/2 md:w-1/2">
      <div className="icon">
        <span className="bg-pup h-[100px] w-[100px] font-gros p-3 text-[20px] rounded-[50%] text-white">
          {Number}
        </span>
      </div>

      <div className="-mt-4 md:-mt-8">
        <h3 className="font-spec font-[600] text-[20px] md:text-[24px]">
          {Title}
        </h3>
        <p className="font-spec text-[14px] md:text-[18px] md:pr-[10%]">
          {Text}
        </p>
      </div>
    </div>
  );
};

const Steps = () => {
  return (
    <section className="px-5 md:px-[10rem] mt-8 md:mt-[5rem] pb-10">
      <h2 className="font-spec font-[700] text-[20px] md:text-[32px] text-center mt-10 mb-12">
        How Lyful Works:
      </h2>
      <Point
        Number="1"
        Title="Create a free account."
        Text="To help you with a more personalised suggestions, we will need to know more about you."
      />
      <div className="md:flex md:justify-end mt-10 md:-mt-5">
        <Point
          Number="2"
          Title="Login."
          Text="You can start using Lyful tools as soon as you are authenticated. Login to get started."
        />
      </div>

      <div className="md:flex md:justify-start mt-10">
        <Point
          Number="3"
          Title="Search for a symptom."
          Text="You will see a dropdown where you can convieniently tell us what your symptom is."
        />
      </div>

      <div className="md:flex md:justify-end mt-10 md:-mt-5">
        <Point
          Number="4"
          Title="Get tailored assistance."
          Text="Our AI assistance will pick up your search query and tell you what you may need to do."
        />
      </div>

      <div className="md:flex md:justify-start mt-10">
        <Point
          Number="5"
          Title="Book a doctor."
          Text="If you need medical assistance, you can search for, and book a doctor very close to you."
        />
      </div>
    </section>
  );
};

export default Steps;
