import AuthContext from "./AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};

export default useAuth;
