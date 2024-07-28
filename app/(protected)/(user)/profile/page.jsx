"use client";

import { useUserContext } from "@/context/AuthContext";
import React from "react";
import { Tabs, Space } from "antd";
import UserProfileTab from "@/components/ui/UserProfileTab";
import PendingRequestTab from "@/components/ui/PendingRequestTab";
import AcceptRequestTab from "@/components/ui/AcceptedRequestTab";

const Profile = () => {
  const { user } = useUserContext();
  console.log(user.id);
  const tabItems = [
    {
      label: `Info`,
      key: `1`,
      children: <UserProfileTab />,
    },
    {
      label: `Pending Requests`,
      key: `2`,
      children: <PendingRequestTab user={user} />,
    },
    {
      label: `Accepted Requests`,
      key: `3`,
      children: <AcceptRequestTab user={user} />,
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
