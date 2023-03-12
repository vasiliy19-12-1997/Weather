import React, { FC } from "react";
import { ICities } from "../../Types/types";

type WeatherCityProps = {
  city?: ICities;
  onClick?: (city: ICities) => void;
};

const WeatherCity: FC<WeatherCityProps> = (props: WeatherCityProps) => {
  return (
    <div>
      {" "}
      {props.city || props.onClick ? (
        <div
          onClick={() => props.onClick(props.city)}
          style={{ padding: "15px", border: "1px solid teal" }}
        >
          {props.city.id}. {props.city.city} проживает в городе{" "}
        </div>
      ) : (
        <div>'Error</div>
      )}
    </div>
  );
};

export default WeatherCity;
