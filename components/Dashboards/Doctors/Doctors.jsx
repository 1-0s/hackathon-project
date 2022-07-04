import React from "react";
import { useRef } from "react";

const DoctorProfile = () => {

    const specialtyRef = useRef();
    const experienceRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const chargeRef = useRef();
     const formRef = useRef();

    const submitHandler = (e) => {
    e.preventDefault();
    const specialty = specialtyRef.current.value;
    const experience = experienceRef.current.value;
    const city = cityRef.current.value;
    const state = stateRef.current.value;
    const charge = chargeRef.current.value;

    const doctor_details = {
        specialty,
        experience,
        city,
        state,
        charge,
    }
    }
    
  return (
    <>
      <section className="bg-teal-50 pt-10 px-12 md:px-[5rem] pb-10">
        <div className="mt-5">
          <h2 className="font-spec font-[700] text-[18px] md:text-[32px] opacity-60">
            Hey Doc,
            <br />
            Kindly update your profile
          </h2>
        </div>
      </section>

      {/* Form field */}

      <section className="bg-white mt-10 px-12 md:px-[5rem]">
        <form
          className="flex flex-col"
          onSubmit={submitHandler}
          ref={formRef}
        >
          <input
            ref={specialtyRef}
            type="text"
            className="mb-3 w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
            placeholder="Specialty:"
            minLength="5"
            required
          />

          <textarea
            ref={experienceRef}
            className="mb-3 w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
            placeholder="briefly describe your experience:"
            minLength="5"
            required
          />

          <input
            ref={cityRef}
            type="text"
            className="mb-3 w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
            placeholder="Which city do you work?"
            required
          />
         
          <input
            ref={stateRef}
            type="text"
            id="state"
               placeholder="in which State?"
            className="mb-3 font-spec w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
            required
          />
          <input
            ref={chargeRef}
            type="number"
            className="w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
            placeholder="how much do you charger per session (in USD)?:"
            minLength="3"
            required
          />
          <button
            className="mt-3 py-[6px] bg-pup text-sm font-spec text-white w-[100px] px-3"
            type="submit"
          >
            Update profile
          </button>
        </form>
      </section>
    </>
  );
};

export default DoctorProfile;
