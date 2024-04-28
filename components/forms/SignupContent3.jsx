import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { animals, availability, categories } from "@/constants/data";

const SignupContent3 = ({ register }) => {
  const [values, setValues] = useState(new Set([]));

  return (
    <div>
      <div className="flex w-full  flex-col gap-2 mb-3">
        <Select
          label="Service Category"
          selectionMode="multiple"
          variant="bordered"
          size="sm"
          selectedKeys={values}
          className="max-w-full"
          onSelectionChange={setValues}
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
  );
};

export default SignupContent3;
