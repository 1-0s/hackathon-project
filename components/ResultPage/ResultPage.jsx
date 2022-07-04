import React from "react";
import { MainButton } from "../Misc/Buttons";
import SearchDoctor from "../Misc/SearchDoctor";
import DropdownComp from "./Dropdown";

const ResultPage = ({ Firstname }) => {
  return (
    <>
      <section className="bg-teal-50 pt-10 px-12 md:px-[5rem] pb-10">
        <div className="mt-5">
          <h2 className="font-spec font-[700] text-[18px] md:text-[32px] opacity-60">
            Hey {Firstname},<br />
            What symptom do you have?
          </h2>

          <form>
            {/* <textarea
              className="textarea font-gros resize-none required block w-[80%] h-[200px] pl-5 pt-5 my-5 rounded-[15px] outline-none hover:border-solid hover:border-[1px] hover:border-pup"
              placeholder="start typing..."
            ></textarea> */}
            <DropdownComp />
            <MainButton link="" text="Check this up now!" />
          </form>
        </div>
      </section>

      {/* Result here */}

      <section className="results mt-10 px-12 md:px-[5rem]">
        <div className="symptoms">
          <h2 className="font-spec font-[700] text-[18px] md:text-[32px]">
            Possible Diagnosis: <span className="text-pup">Malaria</span>
          </h2>

          <p className="font-spec text-[16px] opacity-60 my-4 md:text-[25px] leading-[120%]">
            Symptoms of malaria include fever and flu-like illness, including
            shaking chills, headache, muscle aches, and tiredness. Nausea,
            vomiting, and diarrhea may also occur. Malaria may cause anemia and
            jaundice (yellow coloring of the skin and eyes) because of the loss
            of red blood cells
          </p>
        </div>

        <div className="remedy mt-10">
          <h2 className="font-spec font-[700] text-[18px] md:text-[32px]">
            Home Remedy
          </h2>

          <p className="font-spec text-[16px] opacity-60 my-2 md:text-[25px] leading-[120%]">
            Symptoms of malaria include fever and flu-like illness, including
            shaking chills, headache, muscle aches, and tiredness. Nausea,
            vomiting, and diarrhea may also occur. Malaria may cause anemia and
            jaundice (yellow coloring of the skin and eyes) because of the loss
            of red blood cells
          </p>
        </div>

        <div className="medication mt-10">
          <h2 className="font-spec font-[700] text-[18px] md:text-[32px]">
            Common medication
          </h2>

          <p className="font-spec text-[16px] opacity-60 my-2 md:text-[25px] leading-[120%]">
            Symptoms of malaria include fever and flu-like illness, including
            shaking chills, headache, muscle aches, and tiredness. Nausea,
            vomiting, and diarrhea may also occur. Malaria may cause anemia and
            jaundice (yellow coloring of the skin and eyes) because of the loss
            of red blood cells
          </p>
        </div>

        <div className="related mt-12 md:flex gap-5">
          <h2 className="font-spec font-[700] text-[16px] md:text-[24px] md:w-1/4">
            Related symptoms
          </h2>

          <p className="font-spec md:w-3/4 text-[16px] opacity-60 my-2 md:text-[25px] leading-[120%]">
            Headache, constipation, dysentry, erectile dyfunction, mentral pain,
            soar throat, tastlessness, excessive sweating
          </p>
        </div>

        <div className="book_doctor mt-10">
          <h2 className="font-spec font-[700] text-[18px] md:text-[32px]">
            Would you like to see a doctor?
          </h2>

          <SearchDoctor />
        </div>

        <div className="book_doctor my-10 text-center">
          <h2 className="font-spec font-[700] opacity-60 text-[18px] md:text-[32px] ">
            Disclaimer
          </h2>

          <p className="font-spec text-[16px] opacity-60 my-2 md:text-[25px] leading-[120%]">
            Lyful is a tool that curates medical data from reliable sources, it
            shouldn’t be used to replace your doctor.
          </p>
        </div>
      </section>
    </>
  );
};

export default ResultPage;
