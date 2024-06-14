import React from "react";
import ServiceRequestCard from "../cards/ServiceRequestCard";

const IncomingRequestTab = () => {
  return (
    <div>
      <h1 className="mb-10">Incoming Requests</h1>
      <ServiceRequestCard />
    </div>
  );
};

export default IncomingRequestTab;
