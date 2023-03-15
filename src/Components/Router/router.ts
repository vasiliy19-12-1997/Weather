import Login from "../Pages/Login/login";
import StartPage from "../Pages/StartPage/startPage";
import WeatherList from "./../WeaherList/weatherList";
import WeatherCity from "./../WeatherCity/weatherCity";
export const privateRoutes = [
  { path: "/weather", element: StartPage },
  { path: "/weatherList", element: WeatherList },
  { path: "/weather/:city?", element: WeatherCity },
];
export const publicRoutes = [{ path: "/login", element: Login }];