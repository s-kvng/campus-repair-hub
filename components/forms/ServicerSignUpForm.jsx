"use client";

import React, { useState, useMemo } from "react";
import { Button, message, Steps, theme } from "antd";
import { useForm } from "react-hook-form";

import SignupContent1 from "./SignupContent1";
import SignupContent2 from "./SignupContent2";
import SignupContent3 from "./SignupContent3";

const ServicerSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [charge, setCharge] = useState(1);
  const [categories, setCategories] = useState("");
  const [availability, setAvailability] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    message.success("Submitted successfully");
  };

  //
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  // disable next button
  useMemo(() => {
    const isDisabled = (current) => {
      console.log(categories);
      if (current === 0) {
        if (
          firstName === "" ||
          lastName === "" ||
          email === "" ||
          password === ""
        ) {
          return true;
        } else if (!validateEmail(email)) {
          return true;
        }
      } else if (current === 1) {
        if (phone === "" || charge === "" || address === "") {
          return true;
        }
      } else if (current === 2) {
        if (categories === "" || availability === "") {
          return true;
        }
      }

      return false;
    };

    setIsDisabled(isDisabled(current));
  }, [
    firstName,
    lastName,
    email,
    password,
    current,
    phone,
    charge,
    address,
    categories,
    availability,
  ]);

  const steps = [
    {
      title: "Auth Information",
      content: (
        <SignupContent1
          register={register}
          errors={errors}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      ),
    },
    {
      title: "Personal Info",
      content: (
        <SignupContent2
          register={register}
          errors={errors}
          phone={phone}
          setPhone={setPhone}
          charge={charge}
          setCharge={setCharge}
          address={address}
          setAddress={setAddress}
        />
      ),
    },
    {
      title: "Work Info",
      content: (
        <SignupContent3
          register={register}
          categoriesValue={categories}
          setCategories={setCategories}
          availabilityValue={availability}
          setAvailability={setAvailability}
        />
      ),
    },
  ];

  const next = () => {
    // Check validation for current step before moving to the next
    if (validateCurrentStep(current)) {
      setCurrent(current + 1);
    } else {
      message.error("Please fill in all required fields.");
    }
  };

  const validateCurrentStep = (stepIndex) => {
    // Implement logic to check if all required fields in the current step are filled
    // You can access errors object from useForm and check for specific fields
    // based on stepIndex
    if (stepIndex === 0) {
      // Check for required fields in step 1 (e.g., firstname, lastname, email, password)
      return (
        !errors.firstname &&
        !errors.lastname &&
        !errors.email &&
        !errors.password
      );
    } else if (stepIndex === 1) {
      // Check for required fields in step 2 (e.g., contact, charge)
      return !errors.contact && !errors.charge;
    }
    // ... add checks for other steps if needed
    return true; // Default to true if no validation needed for a step
  };

  //

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    marginTop: 40,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} disabled={isDisabled}>
            Next
          </Button>
        )}

        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit" disabled={isDisabled}>
            Done
          </Button>
        )}

        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </form>
  );
};
export default ServicerSignUpForm;
