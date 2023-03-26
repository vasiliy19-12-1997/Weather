import { makeAutoObservable } from "mobx";
import {
  getCurrentCityWeather,
  getCurrentUserWeather,
} from "../Components/API/serviceWeather";
import { getWeekWeather } from "./../Components/API/serviceWeather";
import { ICardWeather, ICities, IUserCities } from "./../Types/types";

class Store {
  userCity: IUserCities = {};
  cities: ICities[] = [];
  currentCity: ICardWeather[] = [];
  date: Date = new Date();
  constructor() {
    makeAutoObservable(this);
  }
  //   получаем погоду в городе пользователя из его местоположения(долгота + ширина)
  getCurrentUserWeather = async (lat: number, lon: number) => {
    const { data } = await getCurrentUserWeather(lat, lon);
    this.userCity = {
      city: data.name,
      temperature: Math.floor(data.main.temp - 273.15),
      weather: data.weather[0].description,
      icon: data.weather[0].icon,
      feels_like: Math.floor(data.main.feels_like - 273.15),
      pressure: Math.floor(data.main.pressure / 1.333224),
      humidity: data.main.humidity,
      temp_min: Math.floor(data.main.temp_min - 273.15),
      temp_max: Math.floor(data.main.temp_max - 273.15),
      visibility: data.visibility,
      wind: data.wind.speed,
    };
  };
  //   получаем погоду в городе
  getCurrentCityWeather = async (city: string) => {
    const { data } = await getCurrentCityWeather(city);
    this.cities = [
      ...this.cities,
      {
        city: data.name,
        temperature: Math.floor(data.main.temp - 273.15),
        weather: data.weather[0].description,
        id: data.id,
        lat: data.coord.lat,
        lon: data.coord.lon,
        icon: data.weather[0].icon,
      },
    ];
    localStorage.setItem("cities", JSON.stringify(this.cities));
  };

  //
  //   получаем погоду за 7 дней опять же из координат
  getWeekWeather = async (lat: number, lon: number) => {
    const { data } = await getWeekWeather(lat, lon);
    //time formatting from UTC UNIX in seconds
    const format = (time: number): string => {
      const day = new Date(time * 1e3);
      return day.toLocaleDateString();
    };
    this.currentCity = data.daily.map((v: any) => ({
      dayTemp: v.temp.day,
      nightTemp: v.temp.night,
      weather: v.weather[0].description,
      icon: v.weather[0].icon,
      day: format(v.dt),
    }));
  };

  setCities() {
    this.cities = JSON.parse(localStorage.getItem("cities") || "{}");
  }
  deleteCities(id: number | undefined) {
    this.cities = this.cities.filter((city) => city.id !== id);
    localStorage.setItem("cities", JSON.stringify(this.cities));
  }
}

export const store = new Store();
