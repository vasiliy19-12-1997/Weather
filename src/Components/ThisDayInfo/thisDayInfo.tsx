import "./thisDayInfo.scss";
type Props = {};

const ThisDayInfo = (props: Props) => {
  return (
    <div className="additional-info-wrapper">
      <div className="humidity-info">
        <p className="info-label">Влажность</p>
        <p className="humidity">80%</p>
      </div>

      <div className="wind-info">
        <p className="info-label">Ветер</p>
        <p className="wind-speed">3 м/c</p>
      </div>
    </div>
  );
};

export default ThisDayInfo;
