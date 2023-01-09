// import useAuthentication from "hooks/useAuthentication";
import useAuthentication from "../hooks/useAuthentication";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { isLogin } = useAuthentication();

  return (
    <div>
      {isLogin ? <AppRoutes /> : <AuthRoutes />}
    </div>
  );
};
export default Routes;
