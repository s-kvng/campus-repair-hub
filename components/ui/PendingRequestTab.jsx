import { useState, useEffect } from "react";
import UserPendingRequestCard from "../cards/UserPendingRequestCard";
import { Flex, Col, Row } from "antd";
import appwriteService from "@/appwrite/config";

const PendingRequestTab = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    console.log("user id => ", user.id);
    setIsLoading(true);
    const fetchRequest = async () => {
      try {
        const pendingServiceRequest =
          await appwriteService.getUserPendingRequests(user.id);
        console.log("pending requests => ", pendingServiceRequest.length);
        setPendingRequests(pendingServiceRequest);
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
          pendingRequests.length > 0 &&
          pendingRequests.map((pendingRequest) => (
            <Col key={pendingRequest.$id} span={8}>
              <UserPendingRequestCard
                key={pendingRequest.$id}
                pendingRequest={pendingRequest}
                isLoading={isLoading}
              />
            </Col>
          ))
        )}

        {pendingRequests.length === 0 && (
          <Col span={16}>No pending requests</Col>
        )}
      </Row>
    </div>
  );
};

export default PendingRequestTab;
