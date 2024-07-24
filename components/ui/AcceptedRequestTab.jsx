"use client";

import React from "react";
import UserAcceptRequestCard from "../cards/UserAcceptRequestCard";
import { Flex, Col, Row } from "antd";

const AcceptRequestTab = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <UserAcceptRequestCard />
        </Col>
        <Col span={8}>
          <UserAcceptRequestCard />
        </Col>
        <Col span={8}>
          <UserAcceptRequestCard />
        </Col>
      </Row>
    </div>
  );
};

export default AcceptRequestTab;
