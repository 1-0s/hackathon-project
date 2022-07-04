import React from "react";
import Link from "next/link";

export const MainButton = ({ link, text, width, styling }) => {
  return (
    <button
      className={`btn ${width} ${styling} border-[1px] rounded-[5px] bg-pup text-white hover:text-pup hover:bg-white p-2`}
    >
      <Link href={link}>
        <a className="text-white hover:text-pup font-gros text-[16px]">
          {text}
        </a>
      </Link>
    </button>
  );
};

export const PrimaryButton = ({ link, text }) => {
  return (
    <button className="btn outline-none rounded-[5px] bg-white text-pup hover:bg-pup hover:text-white border-pup border-[1px] border-solid py-1 px-3 ">
      <Link href={link}>
        <a className="font-gros text-[16] text-pup hover:text-white">{text}</a>
      </Link>
    </button>
  );
};
