"use client";

import { useUserContext } from "@/context/AuthContext";
import React from "react";

const Profile = () => {
  const { user } = useUserContext();
  console.log(user.repairer);
  return <div className="text-black">Profile {user.firstname}</div>;
};

export default Profile;
