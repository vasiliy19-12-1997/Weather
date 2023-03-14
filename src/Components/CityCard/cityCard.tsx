import axios from "axios";
import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { store } from "../../Store/store";
import { ICities } from "../../Types/types";
import "./cityCard.scss";

type CityCardParams = {
  id: string;
};
const CityCard: FC<ICities> = ({
  id,
  city,
  weather,
  temperature,
  icon,
  lat,
  lon,
}) => {
  const [cities, setCities] = useState(city);
  const Apikey = "d2cda96c7881426eff7d69f04226b87b";
  const navigate = useNavigate();
  const params = useParams<CityCardParams>();
  const fethcCities = async () => {
    try {
      const response = await axios.get<ICities>(
        `weather?lat=${lat}&lon=${lon}&appid=${Apikey}` + params.id
      );
      setCities(response.data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fethcCities();
  }, []);

  return (
    <div
      className="cityCard"
      onClick={() => navigate("/weatherList/" + params.id)}
    >
      <div key={id}>
        <p>{city} </p>
        <p> {weather}</p>
        <p>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </p>
        <p>{temperature}°C</p>
      </div>

      <div className="cityCardDelete">
        <button onClick={() => store.deleteCities(id)}>
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
        </button>
      </div>
    </div>
  );
};

export default observer(CityCard);
