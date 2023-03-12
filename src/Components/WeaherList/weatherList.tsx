import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICities } from "../../Types/types";
import WeatherCity from "../WeatherCity/weatherCity";

type WeatherPageParams = {
  cityId: string;
};

const WeatherList = () => {
  const [city, setCity] = useState<ICities>({ city: "fdf", id: 122 });
  const params = useParams<WeatherPageParams>();
  const navigate = useNavigate();
  return (
    <>
      {params ? (
        <WeatherCity
          city={city}
          onClick={(city) => navigate("/weather/" + city)}
        />
      ) : (
        <WeatherList />
      )}
    </>
  );
};

export default observer(WeatherList);
