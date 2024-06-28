"use client";

import React, { useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "@nextui-org/react";

import { Select, SelectItem } from "@nextui-org/react";
import { availability, categories } from "@/constants/data";

const UpdateWorkProfileCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [categoriesValue, setCategories] = useState(
    new Set(["electrical appliance"])
  );
  const [availabilityValue, setAvailability] = useState(new Set(["available"]));

  //
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

  //
  const handleCatAvaSubmit = async () => {
    console.log(categoriesValue);
    console.log(availabilityValue);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
        {/* form for contact & address */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className=" z-20" onSubmit={handleSubmit(onSubmit)}>
            <div className=" space-y-5 mb-3">
              <div className="">
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
                  <span className=" text-red-500">
                    Contact field is required
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
                  <span className=" text-red-500">
                    Address field is required
                  </span>
                )}
              </div>
            </div>

            <Button
              variant="primary"
              size="sm"
              className="w-20 font-semibold text-md cursor-pointer disabled:cursor-wait"
              disabled={phone.length <= 0 || address.length <= 0}
              // onClick={onSubmit}
            >
              {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
              Save
            </Button>
          </form>
        </div>

        {/* 2nd card for categories and availability */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className=" z-20" onSubmit={handleCatAvaSubmit}>
            <div className=" space-y-5 mb-3">
              <div className="flex w-full  flex-col gap-2 mb-3">
                <Select
                  selectedKeys={categoriesValue}
                  label="Service Category"
                  selectionMode="multiple"
                  variant="bordered"
                  size="sm"
                  className="max-w-full"
                  onSelectionChange={setCategories}
                  {...register("categories", { required: true })}
                >
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </Select>
                {/* <p className="text-small text-default-500">
          Selected: {Array.from(values).join(", ")}
        </p> */}
              </div>

              <div>
                <Select
                  selectedKeys={availabilityValue}
                  onSelectionChange={setAvailability}
                  variant="bordered"
                  label="Select Availability"
                  size="sm"
                  className="max-w-full"
                  {...register("availability", { required: true })}
                >
                  {availability.map((available) => (
                    <SelectItem key={available.value} value={available.value}>
                      {available.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <Button
              variant="primary"
              size="sm"
              className="w-20 font-semibold text-md cursor-pointer disabled:cursor-wait"
              // onClick={onSubmit}
            >
              {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
              Update
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateWorkProfileCard;
