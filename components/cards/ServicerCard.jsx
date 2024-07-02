import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";

export default function ServicerCard() {
  return (
    <Card className=" min-w-[80%] max-w-[80%]">
      <CardHeader className="flex gap-3">
        <Image alt="nextui logo" height={40} radius="sm" src={""} width={40} />
        <div className="flex flex-col">
          <p className="text-md">{"request?.user?.firstname"}</p>
          <p className="text-small text-default-500">{"request?.user.email"}</p>
        </div>

        <div>availability</div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <p className="text-sm text-slate-700">
            Location: {"request?.location"}
          </p>
          <p className="text-sm text-slate-700">
            Category: {"request?.category"}
          </p>
        </div>
        <div className=" flex justify-end ">Reviews</div>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-end">
        <Button
          color="primary"
          spinner={
            <svg
              className="animate-spin h-5 w-5 text-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
          }
        >
          Done
        </Button>
      </CardFooter>
    </Card>
  );
}