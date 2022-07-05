import React from "react";
import { useRouter } from "next/router";

const SearchDoctor = () => {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    alert("You will be attended to shortly!");
    router.push("/");
  };

  return (
    <>
      <form
        className="flex flex-col md:flex-row gap-4 mt-3"
        onSubmit={submitHandler}
      >
        <input
          required
          type="search"
          placeholder="Type your address"
          className="py-2 pl-2 w-[100%] md:w-[50%] outline-none border-solid border-[1px] border-pup"
        />
        <button
          className="mt-3 bg-pup text-white rounded-sm p-3 font-gros text-[16px]"
          type="submit"
        >
          Make Request
        </button>
      </form>
    </>
  );
};

export default SearchDoctor;
