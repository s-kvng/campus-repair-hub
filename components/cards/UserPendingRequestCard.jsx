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

const UserPendingRequestCard = ({ pendingRequest, isLoading }) => {
  return (
    <>
      <Card
        loading={isLoading}
        actions={actions}
        style={{ minWidth: 300, marginBottom: 6 }}
      >
        <Card.Meta
          avatar={<Avatar src={pendingRequest?.repairer?.avatar} />}
          title={pendingRequest?.repairer?.firstname}
          description={
            <>
              <p>Location : {pendingRequest?.location}</p>
              <p>Category : {pendingRequest?.category}</p>
            </>
          }
        />
      </Card>
    </>
  );
};

export default UserPendingRequestCard;
