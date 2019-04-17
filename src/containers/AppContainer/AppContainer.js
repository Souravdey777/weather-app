import React, { Component } from 'react';
import ClassNames from './AppContainer.module.css';
import TemperatureModal from '../../components/temperatureModal/temperatureModal';
import axios from 'axios';
import CurrentWeatherDetails from '../../components/currentweatherdetails/currentweatherdetails';
import HourlyWeatherDetails from '../../components/hourlyweatherdetails/hourlyweatherdetails';
class AppContainer extends Component {
    state = {
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
            visibility: null,
            weather: [],
            length: null,
            wind: {}
        },
        hourlyData: [],
        dailyData: [],
    }

    componentDidMount() {
        this.getlocation();
    }

    getlocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position.coords.latitude)
                this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude }, () => {
                    this.getWeather();
                })
            });
        }
    }

    getWeather = () => {

        //Current forcast
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${this.state.API_KEY}`)
            .then(response => {
                const weatherData = response.data;
                console.log(weatherData);
                this.setState({ weatherData: weatherData }, () => {
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: error });
            });
        //Hourly forcast
        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${this.state.API_KEY}`)
            .then(response => {
                const hourlyData = response.data.list;
                console.log(hourlyData);
                this.setState({ hourlyData: hourlyData }, () => {
                });
            })
            .catch(error1 => {
                console.log(error1);
                this.setState({ error: error1 });
            });
        //Daily forcast
        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${this.state.latitude}&lon=${this.state.longitude}&cnt=10&APPID=${this.state.API_KEY}`)
            .then(response => {
                const dailyData = response.data.list;
                console.log(dailyData);
                this.setState({ dailyData: dailyData }, () => {
                });
            })
            .catch(error1 => {
                console.log(error1);
                this.setState({ error: error1 });
            });
    }


    render() {
        return (
            <div className={ClassNames.AppContainer}>
                <TemperatureModal weatherData={this.state.weatherData} />
                <CurrentWeatherDetails CurrentweatherData={this.state.weatherData} />
                <HourlyWeatherDetails HourlyWeatherData={this.state.hourlyData} />
            </div>
        );
    }
}

export default AppContainer;
