"use client";

import { useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const actions = [<DeleteOutlined key="delete" />];

const UserAcceptRequestCard = ({ acceptedRequest, isLoading }) => {
  return (
    <>
      <Card
        loading={isLoading}
        actions={actions}
        style={{ minWidth: 300, marginBottom: 6 }}
      >
        <Card.Meta
          avatar={<Avatar src={acceptedRequest?.repairer?.avatar} />}
          title={`${acceptedRequest?.repairer?.firstname} ${acceptedRequest?.repairer?.lastname}`}
          description={
            <>
              <p>Description: {acceptedRequest?.description}</p>
              <p>Location : {acceptedRequest?.location}</p>
              <p>Category : {acceptedRequest?.category}</p>
            </>
          }
        />
      </Card>
    </>
  );
};

export default UserAcceptRequestCard;
