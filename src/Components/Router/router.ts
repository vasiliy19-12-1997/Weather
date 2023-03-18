import Login from "../Pages/Login/login";
import Profile from "../Pages/Profile/profile";
import StartPage from "../Pages/StartPage/startPage";
import WeatherList from "../Pages/WeaherList/weatherList";
export const privateRoutes = [
  { path: "/Weather", element: StartPage },
  { path: "/weatherList", element: WeatherList },
  { path: "/profile", element: Profile },
];
export const publicRoutes = [{ path: "/login", element: Login }];
