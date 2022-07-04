import React, { useContext } from "react";
import Overview from "../../components/Dashboards/Doctors/Dashboard";
import Layout from "../../components/Dashboards/Layout";
import { AuthContext } from "../../store/auth-context";
import Link from "next/link";

const OverviewComp = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {authCtx.isLoggedIn ? (
        <Layout Children={<Overview />} />
      ) : (
        <div className="bg-teal-50 py-28 grid place-items-center my-auto border-b-[5px] border-white border-solid">
          <h1>Login to access this page!</h1>
          <Link href="/login">
            <button className="mt-2 py-[6px] border-[1px] rounded-[5px] bg-pup text-white w-[80px] font-gros text-[16px]">
              Login
            </button>
          </Link>
        </div>
      )}{" "}
    </>
  );
};

export default OverviewComp;
