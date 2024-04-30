"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";

import { MailIcon } from "../icons/MailIcon";
import { EyeFilledIcon } from "../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Divider } from "@nextui-org/react";
import { GoogleIcon } from "../icons/GoogleIcon";
import useAuth from "@/context/useAuth";
import appwriteService from "@/appwrite/config";

const SignUpForm = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");

  // scheme for password validation
  const validatePassword = (value) =>
    value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i);

  // function to check password
  const isInvalid = React.useMemo(() => {
    if (value === "") return "default";

    return validatePassword(value) ? "success" : "danger";
  }, [value]);

  // toggle show password
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (data) => {
    const { firstname, lastname, email, password } = data;

    console.log(
      `First Name: ${firstname}, Last Name: ${lastname}, Email: ${email} and Password: ${password}`
    );
    //   try {
    //     const userData = await appwriteService.createUserAccount({email, password, name})
    //     if(userData){
    //         setAuthStatus(true)
    //         setIsLoading(false)
    //         router.push("/profile")
    //     }
    // } catch (error) {
    //     setError(error.message)
    //     setIsLoading(false)
    // }
  };
  return (
    <div className="flex items-center justify-center w-full z-10 py-8 px-4 sm:px-0">
      <div
        className={`mx-auto w-full max-w-lg bg-black rounded-xl py-10 px-4 sm:p-10 `}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[60px]">
            <img src="/favicon.ico" alt="Logo" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-white">
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
        </p>
        <p className="mt-2 text-center text-base text-gray-600 mb-6">
          Become a&nbsp;
          <Link
            href="servicer/sign-up"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Provider
          </Link>
        </p>

        <form className=" z-20" onSubmit={handleSubmit(onSubmit)}>
          <div className=" space-y-5">
            <div>
              <Input
                type="text"
                variant="bordered"
                size="sm"
                label="First Name"
                isClearable
                {...register("firstname", { required: true })}
              />
              {errors.firstname && (
                <span className=" text-red-500">
                  First name field is required
                </span>
              )}
            </div>
            <div>
              <Input
                type="text"
                variant="bordered"
                size="sm"
                label="Last Name"
                isClearable
                {...register("lastname", { required: true })}
              />
              {errors.lastname && (
                <span className=" text-red-500">
                  Last name field is required
                </span>
              )}
            </div>
            <div>
              <Input
                type="email"
                variant="bordered"
                size="sm"
                label="Email"
                isClearable
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className=" text-red-500">Email field is required</span>
              )}
            </div>
            <div>
              <Input
                value={value}
                label="Password"
                // color="default"
                variant="bordered"
                size="sm"
                onInvalid={isInvalid}
                onValueChange={setValue}
                color={isInvalid}
                errorMessage={isInvalid && "Please enter a valid password"}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className=""
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                  minLength: 8,
                })}
              />
            </div>
          </div>

          <div className="mt-5 mb-3">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              // onClick={onSubmit}
            >
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Sign Up
            </Button>
          </div>

          <div className="text-center w-full">
            <div className=" flex items-center mb-4">
              <Divider className=" w-[40%]" />
              <span className=" w-[20%]">OR</span>
              <Divider className=" w-[40%]" />
            </div>

            <div className=" flex justify-center">
              <Link href={"/"}>
                <GoogleIcon />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
