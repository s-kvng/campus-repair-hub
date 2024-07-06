"use client";

import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import {
  EnvironmentTwoTone,
  PhoneTwoTone,
  UserOutlined,
  TagsTwoTone,
  StarTwoTone,
  FundTwoTone,
} from "@ant-design/icons";
import {
  Col,
  Row,
  Rate,
  Avatar,
  Badge,
  Card,
  Skeleton,
  message,
  Modal,
} from "antd";
import {
  Divider,
  Input,
  Select,
  Textarea,
  SelectItem,
} from "@nextui-org/react";

import appwriteService from "@/appwrite/config";
import ReviewCard from "@/components/cards/ReviewCard";
import { useUserContext } from "@/context/AuthContext";

const ServicerProfile = ({ params }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { user: currentUser } = useUserContext();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [cate, setCate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchServicer = async () => {
      try {
        const servicer = await appwriteService.getServicerDetail(id);

        if (!servicer) throw new Error();
        console.log(servicer);

        setCategories(servicer.category.split(","));
        setUser(servicer);
      } catch (error) {
        console.log("get servicer error -> ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServicer();
  }, []);

  // function to open modal
  const showModal = () => {
    setOpen(true);
  };

  // Function to close modal
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleSendRequest = async () => {
    try {
      console.log(cate.currentKey);
      console.log(typeof cate);
      const request = await appwriteService.createRequest({
        servicerId: user.$id,
        userId: currentUser.id,
        category: cate.currentKey,
        location: location,
        description: description,
      });

      if (!request) throw new Error();

      if (request) {
        message.success("Request sent successfully");
        setOpen(false);
      }
    } catch (error) {
      message.error("Failed to send request");
      console.log("send request error -> ", error);
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      {contextHolder}
      {!user.$id || isLoading ? (
        <>
          <div>loading....</div>
        </>
      ) : (
        <>
          {/* <div className="bg-blue-400 px-4 py-2 h-[30vh] overflow-hidden">
            <div className="flex justify-end">
              <div className="flex items-center gap-x-3">
                <p>
                  <Badge
                    dot={user.availability === "available"}
                    offset={[-4, 5]}
                  >
                    <Avatar shape="circle" size="large" src={user.avatarUrl} />
                  </Badge>
                </p>
                <div className="flex flex-col">
                  <p>{`${user.firstname} ${user.lastname}`}</p>
                  <p className="capitalize">{`${user.availability}`}</p>
                </div>
              </div>
            </div>
            <div className="h-full flex justify-center items-center">
              <p className="text-4xl font-semibold uppercase">
                Campus Repair Hub
              </p>
            </div>
          </div> */}
          <div className="flex justify-end">
            <div className="flex items-center gap-x-3">
              <p>
                <Badge
                  color="green"
                  dot={user.availability === "available"}
                  offset={[-4, 5]}
                >
                  <Avatar shape="circle" size="large" src={user.avatar} />
                </Badge>
              </p>
              <div className="flex flex-col">
                <p>{`${user.firstname} ${user.lastname}`}</p>
                <p className="capitalize">{`${user.availability}`}</p>
              </div>
            </div>
          </div>
          <div className="italic text-gray-600 text-center my-3">
            <Button onClick={showModal} color="primary" variant="shadow">
              Request Service
            </Button>
          </div>
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

              {user?.reviews?.map((review, index) => (
                <div key={index} className=" grid sm:grid-cols-2">
                  <ReviewCard
                    key={review?.id}
                    isLoading={isLoading}
                    review={review}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <Modal
        title="Submit Request"
        open={open}
        onOk={handleSendRequest}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form>
          <div className=" flex flex-col gap-y-3">
            <Select
              label="Category"
              variant="bordered"
              placeholder="Select a category"
              selectedKeys={cate}
              className=""
              onSelectionChange={setCate}
            >
              {categories.map((category) => {
                return <SelectItem key={category}>{category}</SelectItem>;
              })}
            </Select>
            <Input
              label="Location"
              placeholder="Enter your Location"
              variant="bordered"
              value={location}
              onValueChange={setLocation}
            />
            <Textarea
              label="Description"
              placeholder="Enter your description"
              variant="bordered"
              className=""
              value={description}
              onValueChange={setDescription}
            />
          </div>
        </form>
      </Modal>
      <div className="text-center text-slate-400">Powered by Pycode</div>
    </div>
  );
};

export default ServicerProfile;
