import { useAtom } from "jotai";
import { isLoggedInAtom, user } from "../atoms/status";
import { useQuery } from "react-query";
import { getUser } from "../Api/api";
import { useEffect } from "react";

const useAuthentication = () => {
  const [userData, setUserData] = useAtom(user);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  const isLogin = !!localStorage.getItem("jwt");

  console.log(isLogin);

  // useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setIsLoggedIn(true);
      const { data } = useQuery("user", getUser);
      console.log(data);
    }
  // }, [isLoggedIn]);

  return { isLogin };
};

export default useAuthentication;
