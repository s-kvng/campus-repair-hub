"use client";

import React, { useEffect, useState } from "react";
import { theme } from "antd";
import appwriteService from "@/appwrite/config";

import ServicerCard from "@/components/cards/ServicerCard";

const Explore = () => {
  const [allServicers, setAllServicers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchRequest = async () => {
      try {
        const servicersData = await appwriteService.getServicers();

        setAllServicers(servicersData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequest();
  }, []);

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
        {isLoading && (
          <div className="flex items-center justify-center">loading...</div>
        )}

        {allServicers.length > 0 &&
          allServicers.map((servicer) => (
            <div key={servicer.$id} className="mb-10 w-[80%] rounded-[12px]">
              <ServicerCard key={servicer.$id} servicer={servicer} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Explore;
