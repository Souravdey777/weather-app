import React, { Component } from 'react';
import ClassNames from './currentweatherdetails.module.css';

class CurrentWeatherDetails extends Component {
  
    render() {
    return (
      <div className={ClassNames.currentweatherdetails}>

      <div>{this.props.CurrentweatherData.humidity} %</div>
      <div>{this.props.CurrentweatherData.pressure}  hPa</div>
      <div>{this.props.CurrentweatherData.temp_max} </div>
      <div>{this.props.CurrentweatherData.temp_min} </div>
      {}
      </div>
    );
  }
}

export default CurrentWeatherDetails;
