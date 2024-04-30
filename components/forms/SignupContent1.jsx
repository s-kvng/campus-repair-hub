"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";

import { EyeFilledIcon } from "../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
const SignupContent1 = ({
  register,
  errors,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // scheme for password validation
  const validatePassword = (value) =>
    value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i);

  // function to check password
  const isInvalid = React.useMemo(() => {
    if (password === "") return "default";

    return validatePassword(password) ? "success" : "danger";
  }, [password]);

  // toggle show password
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <div className=" space-y-5">
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
            <span className=" text-red-500">First name field is required</span>
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
            <span className=" text-red-500">Last name field is required</span>
          )}
        </div>
        <div>
          <Input
            value={email}
            onValueChange={setEmail}
            isRequired
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
            isRequired
            value={password}
            label="Password"
            // color="default"
            variant="bordered"
            size="sm"
            onInvalid={isInvalid}
            onValueChange={setPassword}
            color={isInvalid}
            errorMessage={
              isInvalid &&
              "Please enter a valid password, NB: min 8 characters, atleast 1 number"
            }
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
    </div>
  );
};

export default SignupContent1;
