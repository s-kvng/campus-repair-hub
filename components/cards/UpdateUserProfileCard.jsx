"use client";

import React, { useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { message } from "antd";

import { EyeFilledIcon } from "../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { useUserContext } from "@/context/AuthContext";
import appwriteService from "@/appwrite/config";

const UpdateUserProfileCard = () => {
  const { user, isLoading: userLoading } = useUserContext();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: secondRegister,
    handleSubmit: secondHandleSubmit,
    formState: { errors: secondErrors },
  } = useForm();

  const {
    register: bioRegister,
    handleSubmit: bioHandleSubmit,
    formState: { errors: bioErrors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [bio, setBio] = useState(user.bio);
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
    console.log(user.id);
    setIsLoading(true);
    try {
      const response = await appwriteService.updateProfileCard1(
        user.id,
        data.firstname,
        data.lastname
      );

      if (!response) console.log("not updated");

      if (response) console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // sumbit new password
  const passwordSubmit = async (data) => {
    console.log("submit2 -> ", data);
    setIsPasswordLoading(true);
    try {
      const user = appwriteService.updatePassword(data.password);
      if (!user) {
        message.error("Not updated");
        return;
      }
      if (user) {
        message.success("Updated password");
      }
    } catch (error) {
      console.log("Password error -> ", error);
    } finally {
      setIsPasswordLoading(false);
    }
  };

  // bio submit
  const bioSubmit = async (data) => {
    console.log("bio -> ", data);
    // setIsLoading(true);
    // try {
    //   const response = await appwriteService.updateProfileCard2(user.id, data.bio);
    //   if (!response) console.log("not updated");
    //   if (response) console.log(response);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsLoading(false);
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
          <form className=" z-20" onSubmit={secondHandleSubmit(passwordSubmit)}>
            {secondErrors.password && (
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
                {...secondRegister("password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                  minLength: 8,
                })}
              />

              <Button
                variant="primary"
                size="sm"
                className="w-20 font-semibold text-md cursor-pointer disabled:cursor-wait"
                disabled={(value.length <= 7) | isPasswordLoading}
                // onClick={onSubmit}
              >
                {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
                {isPasswordLoading ? <CircularProgress size="16" /> : "Save"}
              </Button>
            </div>
          </form>

          {/*  */}
          <h2 className="text-xl font-semibold mb-1">Bio</h2>
          <form className=" z-20" onSubmit={bioHandleSubmit(bioSubmit)}>
            <div className="">
              <Textarea
                label="Bio"
                variant="bordered"
                value={bio}
                onValueChange={setBio}
                placeholder="Enter your description"
                disableAnimation
                disableAutosize
                classNames={{
                  base: "max-w-full",
                  input: "resize-y min-h-[40px]",
                }}
                {...bioRegister("bio")}
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
