import ServicerSignUpForm from "@/components/forms/ServicerSignUpForm";
import React from "react";
import Link from "next/link";

const ServicerSignUp = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-teal-400">
      <div className=" my-3 md:m-0 w-full md:w-1/2 bg-white z-20 p-10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[60px]">
            <img src="/favicon.ico" alt="Logo" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-dark">
          Sign Up to your account
        </h2>
        <p className="mt-2 text-center text-base text-gray-600 mb-2">
          Already have an account?&nbsp;
          <Link
            href="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </p>{" "}
        <ServicerSignUpForm />{" "}
      </div>
    </div>
  );
};

export default ServicerSignUp;
