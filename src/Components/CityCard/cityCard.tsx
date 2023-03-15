import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../../Store/store";
import { ICities } from "../../Types/types";
import MyButton from "../UI/MyButton/myButton";
import "./cityCard.scss";

const CityCard: FC<ICities> = ({
  id,
  city,
  weather,
  temperature,
  icon,
  lat,
  lon,
}) => {
  const navigate = useNavigate();

  return (
    <div className="cityCard">
      <div key={id}>
        <p>{city} </p>
        <p> {weather}</p>
        <p>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </p>
        <p>{temperature}°C</p>
      </div>
      <MyButton onClick={() => navigate("/city/" + id)}>get 4 days</MyButton>
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
