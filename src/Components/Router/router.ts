import Login from "../Pages/Login/login";
import Weather from "../Pages/Weather/weather";

export const privateRoutes = [{ path: "/Weather", element: Weather }];
export const publicRoutes = [{ path: "/login", element: Login }];
