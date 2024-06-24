"use client";

import React, { useEffect, useState } from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import IncomingRequestTab from "@/components/shared/IncomingRequestTab";
import ClaimedRequestTab from "@/components/shared/ClaimedRequestTab";
import CompletedRequestTab from "@/components/shared/CompletedRequestTab";
import { useUserContext } from "@/context/AuthContext";
import appwriteService from "@/appwrite/config";

const ManageRequests = () => {
  const { user } = useUserContext();
  const [incomingRequest, setIncomingRequest] = useState([]);

  useEffect(() => {
    console.log("user", user);
    const fetchRequest = async () => {
      try {
        const incomingServiceRequest =
          await appwriteService.getIncomingRequests(user.id);
        setIncomingRequest(incomingServiceRequest);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRequest();
  }, []);

  let tabs = [
    {
      id: "incoming-requests",
      label: "Incoming Requests",
      content: <IncomingRequestTab incomingRequests={incomingRequest} />,
    },
    {
      id: "claimed-requests",
      label: "Claimed Requests",
      content: <ClaimedRequestTab />,
    },
    {
      id: "completed-requests",
      label: "Completed Requests",
      content: <CompletedRequestTab />,
    },
  ];

  return (
    <div className="flex flex-1 min-h-screen">
      {user.id ? (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Repairer Dashboard</h1>
          <div className="flex w-[80%] flex-col">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
              {(item) => (
                <Tab key={item.id} title={item.label}>
                  <Card>
                    <CardBody>{item.content}</CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </div>
        </div>
      ) : (
        <div>loading....</div>
      )}
    </div>
  );
};

export default ManageRequests;
