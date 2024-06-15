"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";

import { EyeFilledIcon } from "../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Divider } from "@nextui-org/react";
import { GoogleIcon } from "../icons/GoogleIcon";
import { CircularProgress } from "@nextui-org/react";
import { message } from "antd";

const LoginForm = ({ className }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
    console.log(data);
    setIsLoading(true);
    const { email, password } = data;

    try {
      const session = await appwriteService.login({ email, password });
      if (session) {
        setAuthStatus(true);
        setIsLoading(false);
        message.success(`You successfully logged in`);
        router.push("/profile");
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
      setIsLoading(false);
      message.error("Something went wrong");
    }
  };
  return (
    <div className="flex items-center justify-center w-full z-10">
      <div
        className={`mx-auto w-full max-w-lg  rounded-xl py-10 px-5 sm:p-10  ${className}`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[60px]">
            <img src="/favicon.ico" alt="Logo" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-gray-600 mb-6">
          Don&apos;t have any account?&nbsp;
          <Link
            href="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {isLoading ? (
          <div className=" z-20 w-full">
            <div className="flex items-center justify-center">
              <CircularProgress
                size="lg"
                color="primary"
                aria-label="loading..."
              />
            </div>
          </div>
        ) : (
          <>
            {error && <p className=" text-red-500 mb-2 z-20">{error}</p>}
            <form className=" z-20" onSubmit={handleSubmit(onSubmit)}>
              <div className=" space-y-8">
                <div>
                  <Input
                    type="email"
                    variant="bordered"
                    label="Email"
                    isClearable
                    {...register("email", { required: true })}
                  />
                </div>
                <div>
                  <Input
                    value={value}
                    label="Password"
                    // color="default"
                    variant="bordered"
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
                  {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
                  Sign in
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
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
