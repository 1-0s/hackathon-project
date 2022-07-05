import React from "react";

const Layout = ({ Children }) => {
  return (
    <>
      <section className="flex flex-col md:flex-row">
        <div className="children w-[100vw] md:w-[80vw]">{Children}</div>
      </section>
    </>
  );
};

export default Layout;
