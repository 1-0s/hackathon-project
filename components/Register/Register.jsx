import React from "react";
import Link from "next/link";
import { useState } from "react";
import RegisterationForm from "./RegisterationForm";

const Register = () => {
  const [radioState, setRadioState] = useState("");
  const [formState, setFormState] = useState(true);

  const handleChange = (event) => {
    setRadioState(event.target.value);
  };

  const btnHandler = () => {
    if (!radioState) {
      alert("Please click something");
    } else {
      setFormState(false);
      // console.log(radioState);
    }
  };

  return (
    <>
      <section className=" bg-teal-50 py-28 grid place-items-center my-auto border-b-[5px] border-white border-solid">
        <div className="text-center">
          <h1 className="mb-5 font-bold text-xl font-spec">
            Create an account:
          </h1>
          {formState && (
            <>
              <p className="mb-5 font-gros">Which option best fits you?</p>

              <div className="flex flex-col md:flex-row md:w-[500px] md:justify-around font-spec">
                <label htmlFor="checkbox1">
                  <input
                    type="radio"
                    id="checkbox1"
                    value="professional"
                    readOnly
                    checked={radioState === "professional"}
                    onChange={handleChange}
                    className="mb-4 md:mb-0"
                  />
                  <span className="ml-2 text-pup font-bold">
                    I am a medical professional
                  </span>
                </label>

                <label htmlFor="checkbox2">
                  <input
                    type="radio"
                    id="checkbox2"
                    value="help"
                    readOnly
                    checked={radioState === "help"}
                    onChange={handleChange}
                    className=""
                  />
                  <span className="ml-2 text-pup font-bold">
                    I need medical help
                  </span>
                </label>
              </div>

              <button
                className="mt-5 py-[6px] bg-pup text-sm text-white w-[80px] "
                type="button"
                onClick={btnHandler}
              >
                Continue
              </button>
            </>
          )}
          {!formState && <RegisterationForm accountType={radioState} />}
          <p className="text-sm mt-3 font-spec">
            Already have an account?
            <span className="text-pup cursor-pointer font-bold font-spec">
              <Link href="/login"> Login</Link>
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
