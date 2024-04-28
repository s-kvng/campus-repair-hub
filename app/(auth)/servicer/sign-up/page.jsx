import ServicerSignUpForm from "@/components/forms/ServicerSignUpForm";
import React from "react";

const ServicerSignUp = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-teal-400">
      <div className=" my-3 md:m-0 w-full md:w-1/2 bg-white z-20 p-10">
        {" "}
        <ServicerSignUpForm />{" "}
      </div>
    </div>
  );
};

export default ServicerSignUp;
