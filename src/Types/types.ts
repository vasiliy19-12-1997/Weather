export interface IUserCities {
  city?: string;
  temperature?: string;
  weather?: string;
  icon?: string;
}
export interface ICities extends IUserCities {
  //ширина
  lat?: number;
  //долгота
  lon?: number;
  id?: number;
}
export interface IAuth {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
