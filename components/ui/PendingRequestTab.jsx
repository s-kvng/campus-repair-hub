import React from "react";
import UserPendingRequestCard from "../cards/UserPendingRequestCard";
import { Flex, Col, Row } from "antd";

const PendingRequestTab = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <UserPendingRequestCard />
        </Col>
        <Col span={8}>
          <UserPendingRequestCard />
        </Col>
        <Col span={8}>
          <UserPendingRequestCard />
        </Col>
        <Col span={8}>
          <UserPendingRequestCard />
        </Col>
      </Row>
    </div>
  );
};

export default PendingRequestTab;
