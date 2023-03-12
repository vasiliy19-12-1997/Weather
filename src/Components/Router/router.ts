import Login from "../Pages/Login/login";
import StartPage from "../Pages/StartPage/startPage";
import WeatherCity from "../WeatherCity/weatherCity";
import WeatherList from "./../WeaherList/weatherList";
export const privateRoutes = [
  { path: "/", element: StartPage },
  { path: "/weather/:cityId", element: WeatherCity },
  { path: "/weatherList/", element: WeatherList },
];
export const publicRoutes = [{ path: "/login", element: Login }];
