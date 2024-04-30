"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";

import { EyeFilledIcon } from "../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
const SignupContent2 = ({
  register,
  errors,
  phone,
  setPhone,
  charge,
  setCharge,
  address,
  setAddress,
}) => {
  return (
    <div>
      <div className=" space-y-5">
        <div>
          <Input
            type="text"
            variant="bordered"
            size="sm"
            label="Bio"
            isClearable
            {...register("bio")}
          />
        </div>
        <div>
          <Input
            isRequired
            value={phone}
            onValueChange={setPhone}
            type="text"
            variant="bordered"
            size="sm"
            label="Contact"
            {...register("contact", { required: true })}
          />
          {errors.contact && (
            <span className=" text-red-500">Contact field is required</span>
          )}
        </div>
        <div>
          <Input
            isRequired
            value={charge}
            onValueChange={setCharge}
            type="number"
            variant="bordered"
            size="sm"
            label="Service charge"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
            {...register("charge", { required: true })}
          />
          {errors.charge && (
            <span className=" text-red-500">
              Service charge field is required
            </span>
          )}
        </div>
        <div>
          <Input
            isRequired
            value={address}
            onValueChange={setAddress}
            type="text"
            variant="bordered"
            size="sm"
            label="Address"
            {...register("address", { required: true })}
          />
          {errors.contact && (
            <span className=" text-red-500">Address field is required</span>
          )}
        </div>
        {/* <div>
          <Input
            isRequired
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
        </div> */}
      </div>
    </div>
  );
};

export default SignupContent2;
