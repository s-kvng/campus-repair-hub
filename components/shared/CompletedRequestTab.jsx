"use client";

import React, { useState, useEffect } from "react";
import CompletedRequestCard from "../cards/CompletedRequestCard";
import appwriteService from "@/appwrite/config";

const CompletedRequestTab = ({ userId }) => {
  const [completedRequest, setCompletedRequest] = useState([]);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const completedServiceRequest =
          await appwriteService.getCompletedRequests(userId);
        setCompletedRequest(completedServiceRequest);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRequest();
  }, []);

  if (!completedRequest) {
    return <div>Loading.......</div>;
  }

  return (
    <div>
      <p className="mb-10">Completed Requests</p>

      {completedRequest.length === 0 ? (
        <div>No incoming requests</div>
      ) : (
        completedRequest.map((request) => (
          <CompletedRequestCard key={request.id} request={request} />
        ))
      )}
    </div>
  );
};

export default CompletedRequestTab;
