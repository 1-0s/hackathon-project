import React from "react";
import { MainButton } from "./Buttons";

const SearchDoctor = () => {
  return (
    <>
      <form className="flex flex-col md:flex-row gap-4 mt-3">
        <input
          required
          type="search"
          placeholder="Type your address"
          className="py-2 pl-2 w-[100%] md:w-[50%] outline-none border-solid border-[1px] border-pup"
        />
        <MainButton link="" text="Make request" />
      </form>
    </>
  );
};

export default SearchDoctor;
