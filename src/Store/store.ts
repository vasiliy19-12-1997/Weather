import { makeAutoObservable } from "mobx";
import {
  getCityFourDays,
  getCurrentCityWeather,
  getCurrentUserWeather,
} from "../Components/API/serviceWeather";
import { getWeekWeather } from "./../Components/API/serviceWeather";
import { ICardWeather, ICities, IDay, IUserCities } from "./../Types/types";

class Store {
  userCity: IUserCities = {};
  cities: ICities[] = [];
  currentCity: ICardWeather[] = [];

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
  getCityFourDays = async (city: string) => {
    const { data } = await getCityFourDays(city);
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
    //форматирование времени из UTC UNIX в секундах
    const format = (time: number): string => {
      const day = new Date(time * 1e3);
      return day.toLocaleDateString();
    };
    this.currentCity = data.daily.map((day: IDay) => ({
      dayTemp: day.temp.day,
      nightTemp: day.temp.night,
      weather: day.weather.description,
      icon: day.weather.icon,
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
