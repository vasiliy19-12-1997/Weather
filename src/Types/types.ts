export interface IUserCities {
  city?: string;
  temperature?: number;
  weather?: string;
  icon?: string;
}
export interface ICities {
  city?: string;
  temperature?: number;
  weather?: string;
  id?: number;
}
export interface IForecast {
  dayTemp?: number;
  nightTemp?: number;
  weather?: string;
  icon?: string;
  day?: string;
}
export interface IAuth {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
