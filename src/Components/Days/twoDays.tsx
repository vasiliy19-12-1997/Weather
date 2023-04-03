import React, { useEffect } from "react";

type Props = {};

const TwoDays = (props: Props) => {
  useEffect(() => {
    store.getTwoDaysWeather(lat);
  });
  return <div></div>;
};

export default TwoDays;
