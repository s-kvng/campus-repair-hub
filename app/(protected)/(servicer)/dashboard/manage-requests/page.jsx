"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import IncomingRequestTab from "@/components/shared/IncomingRequestTab";
import ClaimedRequestTab from "@/components/shared/ClaimedRequestTab";

const ManageRequests = () => {
  let tabs = [
    {
      id: "incoming-requests",
      label: "Incoming Requests",
      content: <IncomingRequestTab />,
    },
    {
      id: "claimed-requests",
      label: "Claimed Requests",
      content: <ClaimedRequestTab />,
    },
    {
      id: "completed-requests",
      label: "Completed Requests",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="flex flex-1 min-h-screen">
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
    </div>
  );
};

export default ManageRequests;
