import axios from "axios";
const Apikey = "d2cda96c7881426eff7d69f04226b87b";
const instance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
});
export const getCurrentUserWeather = (lat: number, lon: number) => {
  return instance.get(`weather?lat=${lat}&lon=${lon}&appid=${Apikey}`);
};
export const getCurrentCityWeather = (city: string) => {
  return instance.get(`weather?q=${city}&appid=${Apikey}`, {});
};
export const getWeekWeather = (lat: number, lon: number, cnt: number) => {
  return instance.get(
    `forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${Apikey}`
  );
};
