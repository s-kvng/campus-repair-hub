"use client";

import React, { useState } from "react";
import { Avatar, Badge, Card, Skeleton, Rate } from "antd";

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
          avatar={<Avatar src={review?.author?.avatar} />}
          title={review?.author?.firstname}
          description={review?.content}
        />
        <div className="mt-2">
          <Rate allowHalf disabled defaultValue={review?.rate} />
        </div>
      </Card>
    </>
  );
};

export default ReviewCard;
