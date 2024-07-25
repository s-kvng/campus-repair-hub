import Link from "next/link";
import ServicerSignInForm from "@/components/forms/ServicerSignInFom";

const ServicerLoginPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" my-3 md:m-0 w-full md:w-1/2 bg-white z-20 p-10">
        <div className="mb-2 flex justify-center"></div>

        <ServicerSignInForm />
      </div>
    </div>
  );
};

export default ServicerLoginPage;
