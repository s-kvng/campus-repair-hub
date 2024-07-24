"use client";

import { useUserContext } from "@/context/AuthContext";
import React from "react";
import { Tabs, Space } from "antd";
import UserProfileTab from "@/components/ui/UserProfileTab";

const Profile = () => {
  const { user } = useUserContext();
  console.log(user.repairer);
  const tabItems = [
    {
      label: `Info`,
      key: `1`,
      children: <UserProfileTab />,
    },
    {
      label: `Pending Requests`,
      key: `2`,
      children: `Content of Tab 2`,
    },
  ];

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
