import Login from "../../Pages/Login/login";
import WeatherList from "../../Pages/WeaherList/weatherList";
import StartPage from "../../Pages/StartPage/startPage";

export const privateRoutes = [
  { path: "/Weather", element: StartPage },
  { path: "/weatherList", element: WeatherList },
];
export const publicRoutes = [{ path: "/login", element: Login }];
