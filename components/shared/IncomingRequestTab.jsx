import React from "react";
import ServiceRequestCard from "../cards/ServiceRequestCard";

const IncomingRequestTab = ({ incomingRequests, setIncomingRequest }) => {
  if (!incomingRequests) {
    return <div>Loading.......</div>;
  }
  return (
    <div>
      <h1 className="mb-10">Incoming Requests</h1>

      {incomingRequests.length === 0 ? (
        <div>No incoming requests</div>
      ) : (
        incomingRequests.map((request) => (
          <ServiceRequestCard
            key={request.id}
            request={request}
            setIncomingRequest={setIncomingRequest}
          />
        ))
      )}
    </div>
  );
};

export default IncomingRequestTab;
