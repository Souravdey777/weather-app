import './css/openweathermapicon.css';
import React from "react";

const OpenWeatherMapIcons = props =>{
    const { night, iconid, color, size } = props;
  return (
    <i
      style={{
        fontSize: `${size}px`,
        color: `${color}`
      }}
      className={"wi wi-owm-" + (iconid === "771" || iconid === "901" || iconid === "905"
        ? "" : (night ? "night-" : "day-")) + iconid}></i>
  );
}

export default OpenWeatherMapIcons;