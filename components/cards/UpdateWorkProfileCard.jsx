"use client";

import React, { useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "@nextui-org/react";
import appwriteService from "@/appwrite/config";
import { message } from "antd";

import { Select, SelectItem } from "@nextui-org/react";
import { availability, categories } from "@/constants/data";

import { useUserContext } from "@/context/AuthContext";

const UpdateWorkProfileCard = () => {
  const { user, isLoading: userLoading } = useUserContext();

  let arr = [];
  if (user.category) {
    const str = user.category;
    arr = str.split(",");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // second card
  const {
    register: secondRegister,
    handleSubmit: secondHandleSubmit,
    formState: { errors: secondErrors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [categoriesValue, setCategories] = useState(new Set(arr));
  const [availabilityValue, setAvailability] = useState(
    new Set([user.availability])
  );

  //
  const onSubmit = async (data) => {
    console.log(data);
    const phone = Number(data.contact);
    setIsLoading(true);
    try {
      const response = await appwriteService.updateWorkCard1(
        user.id,
        phone,
        data.address
      );

      if (!response) {
        message.error("not updated");
        return;
      }

      if (response) {
        message.success("Updated successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //
  const handleCatAvaSubmit = async (data) => {
    console.log(data);
    setSecondLoading(true);
    try {
      const response = await appwriteService.updateWorkCard2(
        user.id,
        data.categories,
        data.availability
      );

      if (!response) {
        message.error("not updated");
        return;
      }

      if (response) {
        message.success("Updated successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSecondLoading(false);
    }
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
              disabled={phone.length <= 0 || address.length <= 0 || isLoading}
              // onClick={onSubmit}
            >
              {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
              {isLoading ? <CircularProgress size="12" /> : "Save"}
            </Button>
          </form>
        </div>

        {/* 2nd card for categories and availability */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form
            className=" z-20"
            onSubmit={secondHandleSubmit(handleCatAvaSubmit)}
          >
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
                  {...secondRegister("categories", { required: true })}
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
                  {...secondRegister("availability", { required: true })}
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
              disabled={secondLoading}
              // onClick={onSubmit}
            >
              {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
              {secondLoading ? <CircularProgress size="12" /> : "Update"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateWorkProfileCard;
