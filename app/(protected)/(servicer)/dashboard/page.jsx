"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  EnvironmentTwoTone,
  PhoneTwoTone,
  UserOutlined,
  TagsTwoTone,
  StarTwoTone,
  FundTwoTone,
} from "@ant-design/icons";
import { Col, Row, Rate, Avatar, Badge, Card, Skeleton } from "antd";
import { Divider } from "@nextui-org/react";

import appwriteService from "@/appwrite/config";
import { useUserContext } from "@/context/AuthContext";
import ReviewCard from "@/components/cards/ReviewCard";
import Image from "next/image";
import bg1 from "@/public/assets/bg-image1.jpg";

const Dashboard = () => {
  const { user, isLoading } = useUserContext();
  const router = useRouter();
  const [fetchLoading, setFetchLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log("role -> ", user.repairer, user.id);
    console.log("loading... ", isLoading);
    if (!isLoading && !user.repairer) {
      router.replace("/explore");
    }
    setFetchLoading(true);
    const fetchRequest = async () => {
      try {
        const reviewData = await appwriteService.getReviews(user.id);
        console.log("reviews -> ", reviewData);
        setReviews(reviewData);
      } catch (error) {
        console.log(error);
      } finally {
        setFetchLoading(false);
      }
    };

    fetchRequest();
  }, [user.id, user.repairer]);

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      {!user.id || isLoading ? (
        <>
          <div>loading....</div>
        </>
      ) : (
        <>
          <div className="  h-[30vh] overflow-hidden relative">
            <Image
              src={bg1}
              alt="bg-image"
              className=" -z-10 object-cover"
              fill
            />

            <div className="flex justify-end z-20">
              <div className="flex items-center gap-x-3">
                <p>
                  <Badge
                    dot={user.availability === "available"}
                    offset={[-4, 5]}
                  >
                    <Avatar shape="circle" size="large" src={user.avatarUrl} />
                  </Badge>
                </p>
                <div className="flex flex-col text-white">
                  <p>{`${user.firstname} ${user.lastname}`}</p>
                  <p className="capitalize">{`${user.availability}`}</p>
                </div>
              </div>
            </div>
            <div className="h-full flex justify-center items-center">
              <p className="text-4xl font-semibold uppercase bg-white">
                Campus Repair Hub
              </p>
            </div>
          </div>
          <p className="italic text-gray-600 text-center my-3">
            "Treat all clients with utmost care"
          </p>
          <div className="p-5">
            <div className="mb-10">
              <p className="font-bold mb-2">Personal Info</p>
              <Divider className="my-4" />
              <Row gutter={16}>
                <Col
                  xs={{
                    flex: "100%",
                  }}
                  sm={{ flex: "50%" }}
                >
                  <Accordion variant="splitted">
                    <AccordionItem
                      key="1"
                      aria-label="Name"
                      title="Name"
                      indicator={<UserOutlined color="blue" />}
                    >
                      {`${user.firstname} ${user.lastname}`}
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Contact"
                      title="Contact"
                      indicator={<PhoneTwoTone />}
                    >
                      {`0${user.phone}`}
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Location"
                      title="Location"
                      indicator={<EnvironmentTwoTone />}
                    >
                      {`${user.address}`}
                    </AccordionItem>
                  </Accordion>
                </Col>
                <Col
                  xs={{
                    flex: "100%",
                  }}
                  sm={{ flex: "50%" }}
                >
                  <Accordion variant="splitted">
                    <AccordionItem
                      key="4"
                      aria-label="Expertise"
                      title="Expertise"
                      indicator={<TagsTwoTone />}
                    >
                      {`${user.category}`}
                    </AccordionItem>
                    <AccordionItem
                      key="5"
                      aria-label="Reviews"
                      title="Reviews"
                      indicator={<FundTwoTone />}
                    >
                      {`${user.reviews.length}`}
                    </AccordionItem>
                    <AccordionItem
                      key="6"
                      aria-label="Rate"
                      title="Rate"
                      indicator={<StarTwoTone />}
                    >
                      <Rate allowHalf disabled defaultValue={2.5} />
                    </AccordionItem>
                  </Accordion>
                </Col>
              </Row>
            </div>
            <div className="mb-10">
              <p className="font-bold">Reviews</p>
              <Divider className="my-4" />

              <div className=" grid sm:grid-cols-3">
                {reviews?.map((review, index) => (
                  <ReviewCard
                    key={review?.id}
                    isLoading={fetchLoading}
                    review={review}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="text-center text-slate-400">
        For IT support contact : 0206646446
      </div>
    </div>
  );
};

export default Dashboard;
