"use client";

import { useUserContext } from "@/context/AuthContext";
import React from "react";
import { Tabs, Space } from "antd";

const Profile = () => {
  const tabItems = [
    {
      label: `Info`,
      key: `1`,
      children: `Content of Tab 1`,
    },
    {
      label: `Pending Requests`,
      key: `2`,
      children: `Content of Tab 2`,
    },
  ];

  const { user } = useUserContext();
  console.log(user.repairer);
  return (
    <div className="text-black min-h-[75vh]">
      <div>Profile {user.firstname}</div>
      <Tabs
        tabPosition={"left"}
        items={tabItems.map((tabItem) => {
          return tabItem;
        })}
      />
    </div>
  );
};

export default Profile;
