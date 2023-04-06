import { store } from "../Store/store";

export const items = [
  {
    icon_id: "temperature",
    name: "temperature",
    value: `${store.userCity.temperature} feels like:${store.userCity.feels_like}`,
  },
  {
    icon_id: "Humidity",
    name: "Humidity",
    value: `${store.userCity.humidity}`,
  },
  {
    icon_id: "Dew point",
    name: "temp_min",
    value: `${store.userCity.temp_min}`,
  },
  {
    icon_id: "wind",
    name: "wind",
    value: `${store.userCity.wind}`,
  },
  {
    icon_id: "pressure",
    name: "pressure",
    value: `${store.userCity.pressure}`,
  },
  {
    icon_id: "Visibility",
    name: "Visibility",
    value: `${store.userCity.visibility}`,
  },
];
export const days = [
  {
    day: `${store.date}`,
    icon: `${store.userCity.icon}`,
    dayTemp: `${store.userCity.temp_max}`,
    nightTemp: `${store.userCity.temp_min}`,
    weather: `${store.userCity.weather}`,
  },
];
export const id = Math.random();
