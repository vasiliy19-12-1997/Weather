export interface IUserCities {
  city?: string;
  temperature?: number;
  weather?: string;
  icon?: string;
}
export interface ICities extends IUserCities {
  lat: number; //широта
  lon: number; //долгота
  id?: number;
}
export interface ICardWeather extends IUserCities, ItemDay {
  dayTemp?: number;
  nightTemp?: number;
  weather?: string;
  day?: string;
}
export interface IAuth {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ItemDay {
  icon_id: string;
  name: string;
  value: string;
}
