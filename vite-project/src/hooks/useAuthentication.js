import { useAtom } from "jotai";
import { isLoggedInAtom, user } from "../atoms/status";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAxiosPrivate from "./useAxiosPrivate";

const useAuthentication = () => {
  const [userData, setUserData] = useAtom(user);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  // setIsLoggedIn(false);
  const path = useLocation().pathname;
  console.log(userData);
  const apiPrivateInstance = useAxiosPrivate();

  const isLogin = !!localStorage.getItem("jwt");

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const request = await apiPrivateInstance.get("/user/getUser");

        setUserData(request?.data);
      } catch (err) {
        const error = err;
        return Promise.reject(error.response);
      }
    };

    fetchuser();

    setIsLoggedIn(true);
  }, [path, isLogin]);

  return { isLogin, isLoggedIn };
};

export default useAuthentication;
