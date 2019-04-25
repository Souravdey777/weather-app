import React, { Component } from 'react';
import ClassNames from './currentweatherdetails.module.css';

class CurrentWeatherDetails extends Component {

  getdatetime(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = "0" + a.getHours();
    var min = "0" + a.getMinutes();
    var sec = "0" + a.getSeconds();
    var datetime = date + ' ' + month + ' ' + year + ' ' + hour.substr(-2) + ':' + min.substr(-2) + ':' + sec.substr(-2);
    return datetime;
  }
  gettime(UNIX_timestamp) {
    var AmorPm = "am"
    var a = new Date(UNIX_timestamp * 1000);
    var hour = "0" + a.getHours();
    var min = "0" + a.getMinutes();
    if (hour > 12) {
      hour = "0" + (hour - 12)
      AmorPm = "pm";
    }
    var datetime = hour.substr(-2) + ':' + min.substr(-2) + AmorPm;
    return datetime;
  }

  render() {
    return (
     
      <div className={ClassNames.body}>

        <div className={ClassNames.currentweatherdetails}>
          <div className={ClassNames.topic}>Temperature</div>
          <div className={ClassNames.lines} />
          <div className={ClassNames.twotext}>
            <div>↓{(this.props.CurrentweatherData.main.temp_min - 273.15).toFixed(2)}°C</div>
            |
            <div style={{fontSize:"22px"}}>{(this.props.CurrentweatherData.main.temp - 273.15).toFixed(2)}°C</div>
            |
            <div>↑{(this.props.CurrentweatherData.main.temp_max - 273.15).toFixed(2)}°C</div>
          </div>
        </div>
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
          <div className={ClassNames.topic}>Cloudiness</div>
          <div className={ClassNames.lines} />
          <div className={ClassNames.text}>
           {this.props.CurrentweatherData.clouds.all}%
          </div>
        </div>

        <div className={ClassNames.currentweatherdetails}>
          <div className={ClassNames.topic}>Wind</div>
          <div className={ClassNames.lines} />
          <div className={ClassNames.twotext}>
            <div>Speed: {this.props.CurrentweatherData.wind.speed} m/sec</div>
            <div>Deg: {this.props.CurrentweatherData.wind.deg}°</div>
          </div>
        </div>

        <div className={ClassNames.currentweatherdetails}>
          <div className={ClassNames.twotext}>
            <div>↑Sunrise: {this.gettime(this.props.CurrentweatherData.sys.sunrise)}</div>
            <div>↓Sunset: {this.gettime(this.props.CurrentweatherData.sys.sunset)}</div>
          </div>
        </div>


        {/* last update {this.getdatetime(this.props.CurrentweatherData.dt)} */}
      </div >
    );
  }
}

export default CurrentWeatherDetails;
