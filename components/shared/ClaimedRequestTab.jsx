import React from "react";
import ClaimedRequestCard from "../cards/ClaimedRequestCard";

const ClaimedRequestTab = ({ claimedRequests, setClaimedRequest }) => {
  if (!claimedRequests) {
    return <div>Loading.......</div>;
  }
  return (
    <div>
      <p className="mb-10">Claimed Requests</p>
      {claimedRequests.length === 0 ? (
        <div>No incoming requests</div>
      ) : (
        claimedRequests.map((request) => (
          <ClaimedRequestCard
            key={request.id}
            request={request}
            setClaimedRequest={setClaimedRequest}
          />
        ))
      )}
    </div>
  );
};

export default ClaimedRequestTab;
