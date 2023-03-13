import { FC } from "react";
import { ICities } from "../../Types/types";

const CityCard: FC<ICities> = ({
  id,
  lat,
  lon,
  city,
  weather,
  temperature,
  icon,
}) => {
  return (
    <div>
      <div key={id}>
        <p>{city} </p>
        <p> {weather}</p>
        <p>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </p>
        <p>{temperature}°C</p>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default CityCard;
