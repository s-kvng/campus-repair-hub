"use client";

import React, { useState, useEffect } from "react";
import CompletedRequestCard from "../cards/CompletedRequestCard";
import appwriteService from "@/appwrite/config";

const CompletedRequestTab = ({ userId }) => {
  const [completedRequest, setCompletedRequest] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchRequest = async () => {
      setMessage("Loading....");
      try {
        const completedServiceRequest =
          await appwriteService.getCompletedRequests(userId);
        setCompletedRequest(completedServiceRequest);
      } catch (error) {
        console.log(error);
      } finally {
        if (completedRequest.length <= 0) {
          setMessage("No completed requests found.");
        }
      }
    };

    fetchRequest();
  }, []);

  return (
    <div>
      <p className="mb-10">Completed Requests</p>

      {completedRequest.length === 0 ? (
        <div>{message}</div>
      ) : (
        completedRequest.map((request) => (
          <CompletedRequestCard
            key={request.id}
            request={request}
            setCompletedRequest={setCompletedRequest}
          />
        ))
      )}
    </div>
  );
};

export default CompletedRequestTab;
