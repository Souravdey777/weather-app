import React, { Component } from 'react';
import ClassNames from './AppContainer.module.css';
import TemperatureModal from '../../components/temperatureModal/temperatureModal';
import axios from 'axios';
import CurrentWeatherDetails from '../../components/currentweatherdetails/currentweatherdetails';
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
    }

    componentDidMount() {
        this.getlocation();
    }

    getlocation=()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({ latitude: position.coords.latitude }, () => {
                    this.setState({ longitude: position.coords.longitude }, () => {
                        this.getWeather();
                    });
                })
            });
        }
    }

    getWeather = () => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${this.state.API_KEY}`)
            .then(response => {
                const weatherData = response.data;
                console.log(weatherData);
                this.setState({ weatherData: weatherData }, () => {
                    console.log(this.state.weatherData)
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: error });
            });
    }


    render() {
    return (
      <div className={ClassNames.AppContainer}>
        header
        <TemperatureModal weatherData={this.state.weatherData}/>
        <CurrentWeatherDetails CurrentweatherData={this.state.weatherData.main}/>
        footer
      </div>
    );
  }
}

export default AppContainer;
