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
          <div className={ClassNames.topic}>Min Temperature</div>
          <div className={ClassNames.lines} />
          <div className={ClassNames.text}>
            {(this.props.CurrentweatherData.main.temp_min - 273.15).toFixed(2)}°C
          </div>
        </div>
        
        <div className={ClassNames.currentweatherdetails}>
          <div className={ClassNames.topic}>Max Temperature</div>
          <div className={ClassNames.lines} />
          <div className={ClassNames.text}>
            {(this.props.CurrentweatherData.main.temp_max - 273.15).toFixed(2)}°C 
          </div>
        </div>

        <div className={ClassNames.currentweatherdetails}>
          <div className={ClassNames.topic}>Wind Speed</div>
          <div className={ClassNames.lines} />
          <div className={ClassNames.text}>
            {this.props.CurrentweatherData.wind.speed} m/sec
          </div>
        </div>

        
      </div >
    );
  }
}

export default CurrentWeatherDetails;
