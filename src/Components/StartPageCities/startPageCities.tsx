import { FC } from "react";
import { store } from "../../Store/store";

const StartPageCities: FC = () => {
  return (
    <div className="StartPageCities">
      <p>
        Today is weather:
        {store.userCity.weather}
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${store.userCity.icon}@2x.png`}
        alt=""
      />
      <hr />
      <p>Today is temperature: {store.userCity.temperature}</p>
    </div>
  );
};

export default StartPageCities;
