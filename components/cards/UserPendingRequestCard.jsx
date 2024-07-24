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

const UserPendingRequestCard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Card
        loading={loading}
        actions={actions}
        style={{ minWidth: 300, marginBottom: 6 }}
      >
        <Card.Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          }
          title="Card title"
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        />
      </Card>
    </>
  );
};

export default UserPendingRequestCard;
