import { FC } from "react";
import { SharedSvgSelector } from "../../Assets/Icons/Shared/sharedSvgSelector";
import { store } from "../../Store/store";
import { ICities } from "../../Types/types";
import "./cityCard.scss";

const CityCard: FC<ICities> = (props: ICities) => {
  return (
    <div className="cityCard">
      <div key={props.id}>
        <p>{props.city} </p>
        <p> {props.weather}</p>
        <p>
          <img
            src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt=""
          />
        </p>
        <p>{props.temperature}°C</p>
      </div>
      <div className="cityCardDelete">
        <button onClick={() => store.deleteCities(props.id)}>
          <SharedSvgSelector id="delete" />
        </button>
      </div>
    </div>
  );
};

export default CityCard;
