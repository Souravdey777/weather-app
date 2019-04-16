import React, { Component } from 'react';
import ClassNames from './currentweatherdetails.module.css';

class CurrentWeatherDetails extends Component {

  render() {
    return (
      <div className={ClassNames.body}>

        <div className={ClassNames.currentweatherdetails}>
          <div className={ClassNames.topic}>Humidity</div>
          <div className={ClassNames.lines} />
          <div className={ClassNames.text}>
            {this.props.CurrentweatherData.main.humidity} %
          </div>
        </div>

        <div className={ClassNames.currentweatherdetails}>
          <div className={ClassNames.topic}>Pressure</div>
          <div className={ClassNames.lines} />
          <div className={ClassNames.text}>
            {this.props.CurrentweatherData.main.pressure} hPa
          </div>
        </div>

        <div className={ClassNames.currentweatherdetails}>
          <div className={ClassNames.topic}>Temperature</div>
          <div className={ClassNames.lines} />
          <div className={ClassNames.twotext}>
          <div>Min: ↓{(this.props.CurrentweatherData.main.temp_min - 273.15).toFixed(2)}°C</div>
          <div>Max: ↑{(this.props.CurrentweatherData.main.temp_max - 273.15).toFixed(2)}°C</div>
          </div>
        </div>

        

        <div className={ClassNames.currentweatherdetails}>
          <div className={ClassNames.topic}>Wind Speed</div>
          <div className={ClassNames.lines} />
          <div className={ClassNames.twotext}>
            <div>Speed: {this.props.CurrentweatherData.wind.speed} m/sec</div>
            <div>Deg: {this.props.CurrentweatherData.wind.deg}°</div>
          </div>
        </div>

      </div >
    );
  }
}

export default CurrentWeatherDetails;
