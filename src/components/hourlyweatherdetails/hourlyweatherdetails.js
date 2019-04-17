import React, { Component } from 'react';
import ClassNames from './hourlyweatherdetails.module.css';
import WeatherIcon from 'react-icons-weather';


class HourlyWeatherDetails extends Component {

    state = {
        ExtraDetails: [],
        clicked: false,
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


    showExtraDetails = (extra) => {
        if (extra === this.state.ExtraDetails) {
            this.setState({ clicked: !this.state.clicked })
        }
        else {
            this.setState({ clicked: true })
        }
        this.setState({ ExtraDetails: extra })
    }

    render() {

        return (
            <div className={ClassNames.body}>
                <div className={ClassNames.topic}>Hourly Forcast</div>
                <div className={ClassNames.lines} />
                <div className={ClassNames.section}>
                    {this.props.HourlyWeatherData.slice(0, 30).map(content => (
                        <div className={ClassNames.eachSection} onClick={() => this.showExtraDetails(content)} key={content.dt}>
                            {(content.main.temp - 273.15).toFixed(2)}°C<br />
                            {this.gettime(content.dt)}
                        </div>
                    ))}
                </div>
                {
                    this.state.clicked ? (
                        <div className={ClassNames.ExtraDetails}>
                            <div className={ClassNames.iconsection}>
                                <WeatherIcon className={ClassNames.icon} name="owm" iconId={String(this.state.ExtraDetails.weather.map(value => value.id))}fixedWidth="false" flip="horizontal" rotate="90" />
                            </div>

                            <div className={ClassNames.text}>
                                <div>
                                    Temp: {(this.state.ExtraDetails.main.temp - 273.15).toFixed(2)}°C
                                </div>
                                <div>
                                    Max Temp: {(this.state.ExtraDetails.main.temp_max - 273.15).toFixed(2)}°C
                                </div>
                                <div>
                                    Min Temp: {(this.state.ExtraDetails.main.temp_min - 273.15).toFixed(2)}°C
                                </div>
                                <div>
                                    Pressure: {this.state.ExtraDetails.main.pressure} hPa
                                </div>
                                <div>
                                    Humidity: {this.state.ExtraDetails.main.humidity} %
                                </div>
                            </div>


                            
                        </div>
                        
                    ) : null
                    
                }
                <div className={ClassNames.lines} />
            </div >
        );
    }
}

export default HourlyWeatherDetails;
