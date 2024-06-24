"use client";

import appwriteService from "@/appwrite/config";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState, useContext } from "react";

export const INITIAL_USER = {
  id: "",
  accountId: "",
  firstname: "",
  lastname: "",
  email: "",
  avatarUrl: "",
  repairer: "",
};

export const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => boolean,
};

const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthUser = async (role) => {
    console.log("role: ", role);
    let currentAccount;
    let currentServiceAccount;
    setIsLoading(true);
    try {
      if (role === "repairer") {
        currentServiceAccount = await appwriteService.getCurrentServiceUser();
      } else if (role === "user") {
        currentAccount = await appwriteService.getCurrentUser();
      } else if (role === undefined) {
        currentAccount = await appwriteService.getCurrentUser();

        if (!currentAccount) {
          currentServiceAccount = await appwriteService.getCurrentServiceUser();
        }
      }

      console.log("current user ->", currentAccount);
      console.log("servicer user -> ", currentServiceAccount);
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          acountId: currentAccount.accountId,
          firstname: currentAccount.firstname,
          lastname: currentAccount.lastname,
          email: currentAccount.email,
          avatarUrl: currentAccount.avatar,
          repairer: currentAccount.repairer,
        });
        setIsAuthenticated(true);

        return true;
      }

      if (currentServiceAccount) {
        setUser({
          id: currentServiceAccount.$id,
          acountId: currentServiceAccount.accountId,
          firstname: currentServiceAccount.firstname,
          lastname: currentServiceAccount.lastname,
          email: currentServiceAccount.email,
          avatarUrl: currentServiceAccount.avatar,
          phone: currentServiceAccount.phone,
          address: currentServiceAccount.address,
          bio: currentServiceAccount.bio,
          availability: currentServiceAccount.availability,
          category: currentServiceAccount.category,
          repairer: currentServiceAccount.repairer,
        });
        setIsAuthenticated(true);

        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");
    if (
      cookieFallback === "[]" ||
      cookieFallback === null ||
      cookieFallback === undefined
    ) {
      router.push("/login");
    }

    checkAuthUser();
  }, []);

  const value = {
    user: user,
    isLoading: isLoading,
    isAuthenticated: isAuthenticated,
    setUser: setUser,
    setIsAuthenticated,
    checkAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useUserContext = () => useContext(AuthContext);
