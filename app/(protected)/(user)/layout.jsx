"use client";

import React from "react";
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

const { Header, Content, Footer, Sider } = Layout;
const UserLayout = ({ children }) => {
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
          <div className="flex items-start mb-5 gap-x-2">
            <Avatar
              size="md"
              showFallback
              src="https://images.unsplash.com/broken"
            />
            <div>
              <Link href="#">
                <p className="text-white">Name</p>
              </Link>
              <p className="text-[11px] text-slate-400">REviews</p>
            </div>
          </div>
          <div className="flex items-start mb-3 gap-x-2">
            <Avatar
              size="md"
              showFallback
              src="https://images.unsplash.com/broken"
            />
            <div>
              <Link href="#">Name</Link>
              <p className="text-[11px] text-slate-400">REviews</p>
            </div>
          </div>

          <div className="flex items-start mb-3 gap-x-2">
            <Avatar
              size="md"
              showFallback
              src="https://images.unsplash.com/broken"
            />
            <div>
              <Link href="#">Name</Link>
              <p className="text-[11px] text-slate-400">REviews</p>
            </div>
          </div>
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
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Profile
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
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
