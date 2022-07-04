import React, { useRef, useState } from "react";

const BmiCalculator = () => {
  const [result, setResult] = useState("");
  const [resultDesc, setResultDesc] = useState("");
  const [error, setError] = useState("");

  const [bmiState, setBmiState] = useState(false);
  const heightRef = useRef();
  const weightRef = useRef();

  const calcButton = () => {
    const height = heightRef.current.value;
    const weight = weightRef.current.value;
    const BMI = (weight / Math.pow(height / 100, 2)).toFixed(2);

    if (height === " " || weight === "") {
      setError("Please provide a value!");
    } else {
      let resultDesc;
      if (BMI < 18.5) {
        resultDesc = "it falls within the underweight range.";
      } else if (BMI > 18.5 && BMI < 24.9) {
        resultDesc = "it falls within the normal or healthy weight range.";
      } else if (BMI > 25 && BMI < 29.9) {
        resultDesc = "it falls within the overweight range.";
      } else {
        resultDesc = "it falls within the obese range.";
      }

      setResult(BMI);
      setResultDesc(resultDesc);
      setBmiState(true);
      setError("");
      heightRef.current.value = "";
      weightRef.current.value = "";
    }
  };

  return (
    <>
      <section className="h-auto py-14 bg-teal-50 grid place-items-center">
        <div className="flex flex-col justify-around items-center">
          <h1 className="mb-5 text-pup text-xl font-[700] font-gros">
            BMI CALCULATOR:
          </h1>
          <label className="mb-3 font-spec">Height (in cm):</label>
          <input
            ref={heightRef}
            type="number"
            className="mb-3 w-64 md:w-80 pl-3 font-spec py-2 text-xs outline-none border-solid border-[1px] border-pup"
            placeholder="Height:"
            required
          />
          <label className="mb-3 font-spec">Weight (in kg):</label>
          <input
            ref={weightRef}
            type="number"
            className="mb-3 w-64 md:w-80 pl-3 font-spec py-2 text-xs outline-none border-solid border-[1px] border-pup"
            placeholder="Weight:"
            required
          />
          <p className="my-1 italic text-[0.9rem] text-red-500 font-gros">
            {error}
          </p>
          <button
            className="mt-2 py-[6px] bg-pup text-sm text-white w-[80px] font-gros"
            type="button"
            onClick={calcButton}
          >
            Calculate
          </button>
        </div>
        {bmiState && (
          <div className="mt-5 px-3 flex justify-between items-center w-10/12 bg-blue-200 py-3">
            <h1 className="font-gros text-sm lg:text-base">
              Your <strong>BMI</strong> is <strong>{result}</strong> which means{" "}
              {resultDesc}
            </h1>

            <p
              className="font-bold text-red-500 cursor-pointer ml-4 md:ml-0 border-solid border-2 border-red-500 px-1"
              onClick={() => {
                setBmiState(false);
              }}
            >
              X
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default BmiCalculator;
