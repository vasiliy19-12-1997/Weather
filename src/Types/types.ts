export interface IUserCities {
  city?: string;
  temperature?: number;
  weather?: string;
  icon?: string;
}
export interface ICities extends IUserCities {
  lat?: number; //ширина
  lon?: number; //долгота
  id?: number;
}
export interface ICardWeather extends IUserCities {
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
