import Login from "../Pages/Login/login";
import StartPage from "../Pages/StartPage/startPage";
import WeatherList from "../Pages/WeaherList/weatherList";
export const privateRoutes = [
  { path: "/Weather", element: StartPage },
  { path: "/weatherList", element: WeatherList },
];
export const publicRoutes = [{ path: "/login", element: Login }];
