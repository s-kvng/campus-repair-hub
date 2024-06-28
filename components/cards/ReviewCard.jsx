"use client";

import React, { useState } from "react";
import { Avatar, Badge, Card, Skeleton } from "antd";

const { Meta } = Card;
const ReviewCard = ({ fetchLoading, review }) => {
  return (
    <>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={fetchLoading}
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          }
          title={review?.author?.firstname}
          description={review?.content}
        />
      </Card>
    </>
  );
};

export default ReviewCard;
