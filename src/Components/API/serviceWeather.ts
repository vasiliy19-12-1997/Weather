import axios from "axios";
import { Component } from "react";

export default class serviceWeather extends Component {
  Apikey = "d2cda96c7881426eff7d69f04226b87b";
  instance = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/",
  });
  getCurrentUserWeather = (lat: number, lon: number) => {
    return this.instance.get(
      `weather?lat=${lat}&lon=${lon}&appid=${this.Apikey}`
    );
  };
  getCurrentCityWeather = (city: string) => {
    return this.instance.get(`weather?q=${city}&appid=${this.Apikey}`, {});
  };
  getWeekWeather = (lat: number, lon: number) => {
    return this.instance.get(
      `onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current&units=metric&appid=${this.Apikey}`,
      {}
    );
  };
}
