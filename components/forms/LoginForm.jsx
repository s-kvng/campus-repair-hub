"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@nextui-org/react";

import { MailIcon } from "../icons/MailIcon";
import { EyeFilledIcon } from "../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Divider } from "@nextui-org/react";
import { GoogleIcon } from "../icons/GoogleIcon";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex items-center justify-center w-full z-10">
      <div className={`mx-auto w-full max-w-lg bg-gray-200/50 rounded-xl p-10`}>
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

        <form className=" z-20">
          <div className=" space-y-8">
            <div>
              <Input
                type="email"
                variant="underlined"
                label="Email"
                isClearable
              />
            </div>
            <div>
              <Input
                label="Password"
                color="default"
                variant="bordered"
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
              Sign in
            </Button>
          </div>

          <div className="text-center w-full">
            <p className=" flex items-center mb-4">
              <Divider className=" w-[40%]" />
              <span className=" w-[20%]">OR</span>
              <Divider className=" w-[40%]" />
            </p>

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

export default LoginForm;
