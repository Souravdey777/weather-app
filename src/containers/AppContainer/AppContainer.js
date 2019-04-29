import React, { Component } from 'react';
import ClassNames from './AppContainer.module.css';
import TemperatureModal from '../../components/temperatureModal/temperatureModal';
import axios from 'axios';
import CurrentWeatherDetails from '../../components/currentweatherdetails/currentweatherdetails';
import HourlyWeatherDetails from '../../components/hourlyweatherdetails/hourlyweatherdetails';
import Footer from '../../components/footer/footer';
import Aux from '../hoc/Aux';
import ReactAnimatedWeather from 'react-animated-weather';

class AppContainer extends Component {
    state = {
        datetime: null,
        latitude: null,
        longitude: null,
        API_KEY: `9ed5e07cc11f0ef0a18b03f79dde4029`,
        weatherData: {
            base: "",
            clouds: {},
            cod: null,
            coord: {},
            dt: null,
            id: null,
            main: {},
            name: "",
            sys: {},
            wind: {},
            visibility: null,
            weather: [],
            length: null,
        },
        hourlyData: [],
        night: false,
        alldatafetched: false,
        weatherIconManager: [
            {
                Main: "Thunderstorm",
                Icon: "SLEET",
                backgroundcolor: {
                    background: "rgb(33, 33, 33)",
                    backgroundgradient: "linear-gradient(0deg, rgb(122, 183, 249) 0%,  rgb(33, 33, 33) 100%)"
                }
            },
            {
                Main: "Drizzle",
                Icon: "RAIN",
                backgroundcolor: {
                    background: "rgb(0, 50, 111)",
                    backgroundgradient: "linear-gradient(0deg, rgb(122, 183, 249) 0%,  rgb(0, 50, 111) 100%)"
                }
            },
            {
                Main: "Rain",
                Icon: "RAIN",
                backgroundcolor: {
                    background: "rgb(0, 50, 111)",
                    backgroundgradient: "linear-gradient(0deg, rgb(122, 183, 249) 0%,  rgb(0, 50, 111) 100%)"
                }
            },
            {
                Main: "Snow",
                Icon: "SNOW",
                backgroundcolor: {
                    background: "rgb(123, 176, 255)",
                    backgroundgradient: "linear-gradient(0deg, rgb(177, 205, 247) 0%, rgb(123, 176, 255) 100%)"
                }
            },
            {
                Main: "Fog",
                Icon: "FOG",
                backgroundcolor: {
                    background: "rgb(69, 139, 245)",
                    backgroundgradient: "linear-gradient(0deg, rgb(152, 229, 252) 0%, rgb(69, 139, 245) 100%)"
                }
            },
            {
                Main: "Mist",
                Icon: "FOG",
                backgroundcolor: {
                    background: "rgb(69, 139, 245)",
                    backgroundgradient: "linear-gradient(0deg, rgb(152, 229, 252) 0%, rgb(69, 139, 245) 100%)"
                }
            },
            {
                Main: "Haze",
                Icon: "FOG",
                backgroundcolor: {
                    background: "rgb(69, 139, 245)",
                    backgroundgradient: "linear-gradient(0deg, rgb(152, 229, 252) 0%, rgb(69, 139, 245) 100%)"
                }
            },
            {
                Main: "Clear",
                Icon: "CLEAR",
                backgroundcolor: {
                    background: "rgb(50, 183, 255)",
                    backgroundgradient: "linear-gradient(0deg, rgba(255,222,170,1) 0%, rgb(50, 183, 255) 100%)"
                }
            },
            {
                Main: "Clouds",
                Icon: "PARTLY_CLOUDY",
                backgroundcolor: {
                    background: "rgb(50, 183, 255)",
                    backgroundgradient: "linear-gradient(0deg, rgba(255,222,170,1) 0%, rgb(50, 183, 255) 100%)"
                }
            },
        ],
        iconString: "CLOUDY",
        backgroundString: {
            background: "rgb(0, 92, 250)",
            backgroundgradient: "linear-gradient(0deg, rgb(122, 170, 254) 0%, rgb(0, 92, 250) 100%)",

        }
    }

    componentDidMount() {
        this.getlocation();
    }

    updateButtonClicked = () => {
        this.getlocation();
        this.refs.HourlyWeatherDetails.clickedtofalse();
        this.setState({ alldatafetched: false })
    }



    getlocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)
                this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude }, () => {
                    this.getWeather();
                })
            });
        }
        this.gettime();
    }

    gettime() {
        var AmorPm = "am"
        var a = new Date();
        var hour = "0" + a.getHours();
        var min = "0" + a.getMinutes();
        if (hour > 12) {
            hour = "0" + (hour - 12)
            AmorPm = "pm";
        }
        var date = a.getDate() + '/' + (a.getMonth() + 1) + " " + hour.substr(-2) + ':' + min.substr(-2) + AmorPm;
        this.setState({ datetime: date });
    }

    getWeather = () => {
        axios.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${this.state.API_KEY}`),
            axios.get(`https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${this.state.API_KEY}`)
        ]).then(axios.spread((response1, response2) => {
            const weatherData = response1.data;
            console.log(weatherData);
            this.setState({ weatherData: weatherData }, () => {
                this.nightchecker();
                this.setState({ alldatafetched: true });
            });
            const hourlyData = response2.data.list;
            console.log(hourlyData);
            this.setState({ hourlyData: hourlyData });
        }))
            .catch(error => {
                console.log(error);
                this.setState({ error: error });
            });

        // //Daily forcast is not working with this api 

    }

    nightchecker = () => {

        // console.log(this.state.weatherData.sys.sunset);
        if (this.state.weatherData.sys.sunset > this.state.weatherData.dt && this.state.weatherData.sys.sunrise < this.state.weatherData.dt) {
            this.setState({ night: false }, () => { this.iconStringHandler(); })
        }
        else {
            this.setState({ night: true }, () => { this.iconStringHandler(); })
        }
    }

    iconStringHandler = () => {
        var iconstring = "PARTLY_CLOUDY" + (!this.state.night ? "_DAY" : "_NIGHT")
        var backgroundstring = {};
        this.state.weatherIconManager.map(weatherIconManager => {
            if (weatherIconManager.Main === this.state.weatherData.weather.map(content => content.main)[0]) {
                // console.log(weatherIconManager.Main)
                if (weatherIconManager.Main === "Clear") {
                    // console.log(String(weatherIconManager.Icon+(!this.state.night?"_DAY":"_NIGHT")))
                    iconstring = weatherIconManager.Icon + (!this.state.night ? "_DAY" : "_NIGHT")
                }
                else if (weatherIconManager.Main === "Clouds") {
                    console.log(this.state.weatherData.weather.map(content => content.description)[0]);
                    if (this.state.weatherData.weather.map(content => content.description)[0] === "broken clouds" ||
                        this.state.weatherData.weather.map(content => content.description)[0] === "overcast clouds") {
                        iconstring = "CLOUDY"
                    }
                    else {
                        // console.log(String(weatherIconManager.Icon+(!this.state.night?"_DAY":"_NIGHT")))
                        iconstring = weatherIconManager.Icon + (!this.state.night ? "_DAY" : "_NIGHT")
                    }

                }
                else {
                    iconstring = weatherIconManager.Icon
                }

                backgroundstring = weatherIconManager.backgroundcolor
            }
            return 0;
        })
        // console.log(backgroundstring)
        // console.log(iconstring)
        this.setState({ iconString: iconstring, backgroundString: backgroundstring })

    }


    render() {
        return (
            <Aux>
                {this.state.weatherData.length === null ?
                    <div className={ClassNames.Loading}>
                        <h1>Loading...</h1>
                    </div> :
                    <div className={ClassNames.AppContainer}
                        style={this.state.night ? {
                            background: "rgb(1, 41, 109)",
                            background: "linear-gradient(0deg, rgb(0, 88, 240) 0%, rgb(1, 41, 109) 100%)"
                        } : {
                                background: `${this.state.backgroundString.background}`,
                                background: `${this.state.backgroundString.backgroundgradient}`
                            }}
                    >

                        <TemperatureModal
                            backgroundcolor={this.state.night ? "rgb(1, 41, 109)" : this.state.backgroundString.background}
                            iconString={this.state.iconString}
                            weatherData={this.state.weatherData}
                            night={this.state.night} />
                        <CurrentWeatherDetails CurrentweatherData={this.state.weatherData} />
                        <HourlyWeatherDetails ref="HourlyWeatherDetails" HourlyWeatherData={this.state.hourlyData} weatherDataSun={this.state.weatherData.sys} />
                        <Footer datetime={this.state.datetime} updateButtonClicked={this.updateButtonClicked} show={this.state.alldatafetched} />
                    </div>
                }
            </Aux>
        );
    }
}

export default AppContainer;
