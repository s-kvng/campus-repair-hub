"use client";

import { useUserContext } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }) => {
  const router = useRouter();
  const { user, checkAuthUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const isLoggedIn = await checkAuthUser();
        if (isLoggedIn) {
          if (user.repairer) {
            router.push("/dashboard");
          } else {
            router.push("/profile");
          }
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  return <>{isLoading ? <div>Loading...</div> : <main> {children}</main>}</>;
};

export default AuthLayout;
