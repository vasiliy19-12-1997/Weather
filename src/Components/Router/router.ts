import Login from "../Pages/Login/login";
import StartPage from "../Pages/StartPage/startPage";
import WeatherList from "./../WeaherList/weatherList";
import WeatherCity from "./../WeatherCity/weatherCity";
export const privateRoutes = [
  { path: "/Weather", element: StartPage },
  { path: "/WeatherList", element: WeatherList },
  { path: "/WeatherCity", element: WeatherCity },
];
export const publicRoutes = [{ path: "/login", element: Login }];
