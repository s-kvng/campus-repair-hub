"use client";

import { useState, useEffect } from "react";
import UserAcceptRequestCard from "../cards/UserAcceptRequestCard";
import { Flex, Col, Row } from "antd";
import appwriteService from "@/appwrite/config";

const AcceptRequestTab = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedRequests, setAcceptedRequests] = useState([]);

  useEffect(() => {
    console.log("user id => ", user.id);
    setIsLoading(true);
    const fetchRequest = async () => {
      try {
        const acceptedServiceRequest =
          await appwriteService.getUserAcceptedRequests(user.id);
        console.log("pending requests => ", acceptedServiceRequest.length);
        setAcceptedRequests(acceptedServiceRequest);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequest();
  }, [user.id]);

  return (
    <div>
      <Row gutter={16}>
        {isLoading ? (
          <Col span={16}>Loading...</Col>
        ) : (
          acceptedRequests.length > 0 &&
          acceptedRequests.map((acceptedRequest) => (
            <Col key={acceptedRequest.$id} span={8}>
              <UserAcceptRequestCard
                key={acceptedRequest.$id}
                acceptedRequest={acceptedRequest}
                isLoading={isLoading}
              />
            </Col>
          ))
        )}

        {acceptedRequests.length === 0 && (
          <Col span={16}>No accepted requests</Col>
        )}
      </Row>
    </div>
  );
};

export default AcceptRequestTab;
