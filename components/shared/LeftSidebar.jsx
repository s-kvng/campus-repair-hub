"use client";
import Head from "next/head";
import { Button } from "@/components/ui/button";

import { sidebarLinks } from "@/constants";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11 text-white">
        <div className=" text-2xl font-semibold text-white mb-10">
          Repairer Dashboard
        </div>
        {sidebarLinks.map((link, index) => (
          <Link key={index} href={link.route}>
            {link.label}
          </Link>
        ))}
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={(e) => handleSignOut(e)}
      >
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium text-white">Logout</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
