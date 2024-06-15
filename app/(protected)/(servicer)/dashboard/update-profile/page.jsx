"use client";

import React from "react";
import { UserAddOutlined, EditFilled } from "@ant-design/icons";
import { Tabs } from "antd";
import UpdateUserProfileCard from "@/components/cards/UpdateUserProfileCard";
import UpdateWorkProfileCard from "@/components/cards/UpdateWorkProfileCard";

const UpdateProfile = () => {
  const items = [
    {
      key: "1",
      label: "Update User Profile",
      children: <UpdateUserProfileCard />,
      icon: <UserAddOutlined />,
    },
    {
      key: "2",
      label: "Update Work Profile",
      children: <UpdateWorkProfileCard />,
      icon: <EditFilled />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="flex flex-1 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Repairer Dashboard</h1>
        <div className="w-full">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
