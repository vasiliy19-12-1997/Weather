import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../Context/context";
import { IAuth } from "../../Types/types";
import { privateRoutes, publicRoutes } from "./../Router/router";

type Props = {};

const AppRouter = (props: Props) => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IAuth;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      {/* если пользователь введет не существующий url, то перейдем к туду листу */}
      <Route path="/*" element={<Navigate to="/todoList" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      {/* если пользователь введет не существующий url, то перейдем к туду листу */}
      <Route path="/*" element={<Navigate to="/todoList" replace />} />
    </Routes>
  );
};
export default AppRouter;
