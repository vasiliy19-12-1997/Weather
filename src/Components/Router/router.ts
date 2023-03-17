import Login from "../Pages/Login/login";
import StartPage from "../Pages/StartPage/startPage";
import WeatherList from "../Pages/WeaherList/weatherList";
import WeatherCity from "../Pages/WeatherCity/weatherCity";
export const privateRoutes = [
  { path: "/Weather", element: StartPage },
  { path: "/weatherList", element: WeatherList },
  // { path: "/weatherList/:id", element: WeatherCity },
];
export const publicRoutes = [{ path: "/login", element: Login }];
