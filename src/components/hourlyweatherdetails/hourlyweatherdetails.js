import React, { Component } from 'react';
import ClassNames from './hourlyweatherdetails.module.css';

class HourlyWeatherDetails extends Component {

    getdate(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var datetime = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return datetime;
    }

    render() {
        return (
            <div className={ClassNames.body}>
                {/* {this.props.HourlyWeatherData.map(content => (
                    <p key={content.dt}>{this.getdate(content.dt)} {(content.main.temp - 273.15).toFixed(2)}°C</p>
                ))} */}
            </div >
        );
    }
}

export default HourlyWeatherDetails;
