"use client";

import { useUserContext } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }) => {
  const router = useRouter();
  const { user, checkAuthUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function checks() {
      setIsLoading(true);
      try {
        const isLoggedIn = await checkAuthUser();
        if (isLoggedIn) {
          console.log("checks user", user);
          console.log("checks user repaier", user.repairer);
          if (user.repairer === true) {
            router.push("/dashboard");
          } else {
            router.push("/profile");
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    checks();
  }, []);

  return <>{isLoading ? <div>Loading...</div> : <main> {children}</main>}</>;
};

export default AuthLayout;
