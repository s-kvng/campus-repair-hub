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
import appwriteService from "@/appwrite/config";
import { message } from "antd";

export default function ServiceRequestCard({ request, setIncomingRequest }) {
  const handleClaimRequest = async () => {
    try {
      console.log("Claiming");
      console.log(request.$id);
      await appwriteService.claimRequest(request.$id);
      setIncomingRequest((prevRequests) =>
        prevRequests.filter((req) => req.$id !== request.$id)
      );
      // notification
      message.success(`Claimed Successfully... You can refresh page`);
    } catch (error) {
      console.log(error);
      message.error(`Failed to claim request...`);
    }
  };

  const handleRejectRequest = async () => {
    try {
      console.log("Rejecting..");
      setIncomingRequest((prevRequests) =>
        prevRequests.filter((req) => req.$id !== request.$id)
      );
      await appwriteService.deleteRequest(request.$id);

      // notification
      message.success(`Rejected Successfully...`);
    } catch (error) {
      console.log(error);
      message.error(`Failed to reject request...`);
    }
  };

  return (
    <Card className="max-w-[400px] mb-5">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={request?.user?.avatar}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{request?.user?.firstname}</p>
          <p className="text-small text-default-500">{request?.user.email}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="mb-2">{request?.description}</p>
        <div>
          <p className="text-sm text-slate-700">
            Location: {request?.location}
          </p>
          <p className="text-sm text-slate-700">
            Category: {request?.category}
          </p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-around">
        <Button
          color="secondary"
          variant="flat"
          onClick={handleRejectRequest}
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
          Reject
        </Button>

        <Button
          color="primary"
          onClick={handleClaimRequest}
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
          Claim
        </Button>
      </CardFooter>
    </Card>
  );
}
