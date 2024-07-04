"use client";

import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
} from "@nextui-org/react";
import appwriteService from "@/appwrite/config";

const { Header, Content, Footer, Sider } = Layout;
const UserLayout = ({ children }) => {
  const [allServicers, setAllServicers] = useState([]);
  const [topServicers, setTopServicers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchRequest = async () => {
      try {
        const servicersData = await appwriteService.getServicers();

        setTopServicers(servicersData);
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
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        className=" pt-10 px-3"
      >
        <div className="demo-logo-vertical" />
        <p className="text-white mb-10 text-center text-lg font-bold uppercase">
          Top servicers{" "}
        </p>
        <div>
          {topServicers
            ? topServicers?.map((service) => (
                <div
                  key={service.$id}
                  className="flex items-start mb-3 gap-x-2"
                >
                  <Avatar size="md" showFallback src={service.image} />
                  <div>
                    <Link href="#">
                      <p className="text-white">{service.firstname}</p>
                    </Link>
                    <p className="text-[11px] text-slate-400">
                      {service.reviews.length} reviews
                    </p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </Sider>

      <Layout
        style={{
          marginLeft: 200,
        }}
        className="min-h-screen"
      >
        <Navbar>
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="/explore">
                Explore
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="profile" aria-current="page">
                Profile
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Avatar showFallback src="https://images.unsplash.com/broken" />
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
          className="min-h-full"
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by NEA
        </Footer>
      </Layout>
    </Layout>
  );
};
export default UserLayout;
