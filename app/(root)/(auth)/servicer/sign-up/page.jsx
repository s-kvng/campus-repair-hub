import ServicerSignUpForm from "@/components/forms/ServicerSignUpForm";
import React from "react";
import Link from "next/link";

const ServicerSignUp = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" my-3 md:m-0 w-full md:w-1/2 bg-white z-20 p-10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[120px]">
            <img src="/assets/crh1-transformed.png" alt="Logo" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-dark">
          Sign Up for your Servicer account
        </h2>
        <p className="mt-2 text-center text-base text-gray-600">
          Already have an account?&nbsp;
          <Link
            href="/servicer/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </p>{" "}
        <p className="mt-1 text-center text-sm text-gray-600 mb-2">
          Are you a client?&nbsp;
          <Link
            href="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            SignUp
          </Link>
        </p>{" "}
        <ServicerSignUpForm />{" "}
      </div>
    </div>
  );
};

export default ServicerSignUp;
