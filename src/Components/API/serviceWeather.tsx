import axios from "axios";
const Apikey = "d2cda96c7881426eff7d69f04226b87b";
const instance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
});
export const getCurrentUserWeather = (lat: number, lon: number) => {
  return instance.get(`weather?lat=${lat}&lon=${lon}&appid=${Apikey}`);
};
export const getCurrentCityWeather = (city: string) => {
  return instance.get(`weather?q=${city},ru&appid=${Apikey}`, {});
};
export const getWeekWeather = (lat: number, lon: number) => {
  return instance.get(
    `onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current&units=metric&appid=${Apikey}`,
    {}
  );
};
// export const getCityFourDays = (city: string) => {
//   return instance.get(`forecast/hourly?q=${city}&appid=${Apikey}`, {});
// };
