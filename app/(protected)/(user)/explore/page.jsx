"use client";

import React from "react";
import { theme } from "antd";

import ServicerCard from "@/components/cards/ServicerCard";

const Explore = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
        className="flex flex-col items-center bg-red-400"
      >
        <p>long content</p>
        <ServicerCard />
        <ServicerCard />
        <ServicerCard />
        <ServicerCard />
      </div>
    </>
  );
};

export default Explore;
