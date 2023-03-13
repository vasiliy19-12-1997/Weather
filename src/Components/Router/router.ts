import Login from "../Pages/Login/login";
import StartPage from "../Pages/StartPage/startPage";
import WeatherList from "./../WeaherList/weatherList";
import WeatherCity from "./../WeatherCity/weatherCity";
export const privateRoutes = [
  { path: "/", element: StartPage },
  { path: "/weather/", element: WeatherList },
  { path: "/weather/:cityId?", element: WeatherCity },
];
export const publicRoutes = [{ path: "/login", element: Login }];
