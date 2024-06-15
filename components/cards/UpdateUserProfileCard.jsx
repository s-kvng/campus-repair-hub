"use client";

import React, { useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

import { EyeFilledIcon } from "../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";

const UpdateUserProfileCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
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
    console.log(data);
    // setIsLoading(true);
    // const { email, password } = data;

    // try {
    //   const session = await appwriteService.login({ email, password });
    //   if (session) {
    //     setAuthStatus(true);
    //     setIsLoading(false);
    //     message.success(`You successfully logged in`);
    //     router.push("/dashboard");
    //   }
    // } catch (error) {
    //   setError(error.message);
    //   console.log(error);
    //   setIsLoading(false);
    //   message.error("Something went wrong");
    // }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
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
                      value={firstName}
                      onValueChange={setFirstName}
                      isRequired
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
                      value={lastName}
                      onValueChange={setLastName}
                      isRequired
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
                </div>

                <div className="mt-5 mb-3">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full disabled:cursor-not-allowed"
                    disabled={firstName.length <= 0 || lastName.length <= 0}
                    // onClick={onSubmit}
                  >
                    {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
                    Update
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* second card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Update Password</h2>
          <form className=" z-20" onSubmit={handleSubmit(onSubmit)}>
            {errors.password && (
              <span className=" text-red-500">Password is invalid</span>
            )}
            <div className=" flex items-center gap-x-5">
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

              <Button
                variant="primary"
                size="sm"
                className="w-20 font-semibold text-md cursor-pointer disabled:cursor-wait"
                disabled={value.length <= 0}
                // onClick={onSubmit}
              >
                {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
                Save
              </Button>
            </div>
          </form>

          {/*  */}
          <h2 className="text-xl font-semibold mb-1">Bio</h2>
          <form className=" z-20" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <Textarea
                label="Bio"
                variant="bordered"
                placeholder="Enter your description"
                disableAnimation
                disableAutosize
                classNames={{
                  base: "max-w-full",
                  input: "resize-y min-h-[40px]",
                }}
                {...register("bio")}
              />

              <div className=" flex justify-end mt-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-20 font-semibold text-md cursor-pointer disabled:cursor-wait "
                  disabled
                  // onClick={onSubmit}
                >
                  {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
                  Update
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUserProfileCard;
