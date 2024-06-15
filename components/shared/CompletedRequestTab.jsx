import React from "react";
import CompletedRequestCard from "../cards/CompletedRequestCard";

const CompletedRequestTab = () => {
  return (
    <div>
      <p className="mb-10">Completed Requests</p>
      <CompletedRequestCard />
    </div>
  );
};

export default CompletedRequestTab;
