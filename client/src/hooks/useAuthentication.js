import { useAtom } from "jotai";
import { isLoggedInAtom, user } from "../atoms/status";
import { useQuery, useQueryClient } from "react-query";

const useAuthentication = () => {
  const [userData, setUserData] = useAtom(user);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  if (localStorage.getItem("jwt")) {
    setIsLoggedIn(true);
  }

  useEffect(() => {}, [isLoggedIn]);

  return { isLoggedIn };
};

export default useAuthentication;
