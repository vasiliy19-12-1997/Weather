import { FC } from "react";

interface WeakForecastProps {
  day?: string;
  icon?: string;
  weather?: string;
  dayTemp?: number;
  nightTemp?: number;
}

const WeakForecast: FC<WeakForecastProps> = ({
  day,
  icon,
  weather,
  dayTemp,
  nightTemp,
}) => {
  return (
    <div>
      <div>
        <p>{day}</p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <p>{weather}</p>
        <p>Day - {dayTemp}°C</p>
        <p>Night - {nightTemp}°C</p>
      </div>
    </div>
  );
};

export default WeakForecast;
