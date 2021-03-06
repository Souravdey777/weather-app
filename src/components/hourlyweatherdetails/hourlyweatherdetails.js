import React, { Component } from 'react';
import ClassNames from './hourlyweatherdetails.module.css';
import OpenWeatherMapIcons from './OpenWeatherMapIcons/OpenWeatherMapIcons';


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

    getday(UNIX_timestamp) {
        var day = ['Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat', 'Sun'];
        var a = new Date(UNIX_timestamp * 1000)
        var dayOfWeek = require('day-of-week').get
        var b = day[dayOfWeek(new Date(a.getFullYear(), a.getMonth(), a.getDate()), 'America/Los_Angeles')]
        return b;
    }

    showExtraDetails = (extra) => {
        if (extra === this.state.ExtraDetails) {
            this.setState({ clicked: !this.state.clicked })
        }
        else {
            this.setState({ clicked: true })
        }
        this.setState({ ExtraDetails: extra })
        //console.log(a.getFullYear()+"/"+a.getMonth()+"/"+a.getDate())
    }
    clickedtofalse = () => {
        this.setState({ clicked: false }, () => {
            console.log(this.state.clicked)
        })
    }
    render() {

        return (
            <div className={ClassNames.body}>
                <div className={ClassNames.topic}>Hourly Forcast</div>
                <div className={ClassNames.lines} />
                <div className={ClassNames.section}>
                    {this.props.HourlyWeatherData.slice(0, 30).map(content => (
                        <div
                            className={this.state.clicked && this.state.ExtraDetails === content ? ClassNames.eachSectionclicked : ClassNames.eachSection}
                            onClick={() => this.showExtraDetails(content)}
                            key={content.dt}>
                            <OpenWeatherMapIcons
                                iconid={content.weather.map(value => value.id)}
                                night={content.sys.pod === "n" ? true : false}
                                size="25"
                            />
                            <br />
                            <div>{(content.main.temp - 273.15).toFixed(2)}°C</div>
                            <div>{this.gettime(content.dt)}</div>
                            <div>{this.getday(content.dt)}</div>
                        </div>
                    ))}
                </div>
                {
                    this.state.clicked ? (
                        <div className={ClassNames.ExtraDetails}>
                            <div className={ClassNames.iconsection}>
                                <OpenWeatherMapIcons
                                    iconid={this.state.ExtraDetails.weather.map(value => value.id)}
                                    night={this.state.ExtraDetails.sys.pod === "n" ? true : false}
                                    size="64"
                                /><br />
                                <div><b>{this.state.ExtraDetails.weather.map(content => {
                                    return (content.description.charAt(0).toUpperCase() + content.description.slice(1))
                                })}</b>
                                </div>
                            </div>

                            <div className={ClassNames.text}>


                                <div >
                                    Temp.: {(this.state.ExtraDetails.main.temp - 273.15).toFixed(2)}°C
                                </div>
                                <div>
                                    Min Temp.: ↓{(this.state.ExtraDetails.main.temp_min - 273.15).toFixed(2)}°C
                                </div>
                                <div>
                                    Max Temp.: ↑{(this.state.ExtraDetails.main.temp_max - 273.15).toFixed(2)}°C
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