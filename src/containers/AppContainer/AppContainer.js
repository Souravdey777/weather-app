import React, { Component } from 'react';
import ClassNames from './AppContainer.module.css';
import TemperatureModal from '../../components/temperatureModal/temperatureModal';
import axios from 'axios';
import CurrentWeatherDetails from '../../components/currentweatherdetails/currentweatherdetails';
import HourlyWeatherDetails from '../../components/hourlyweatherdetails/hourlyweatherdetails';
import Footer from '../../components/footer/footer';
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
            visibility: null,
            weather: [],
            length: null,
            wind: {}
        },
        hourlyData: [],
        night: false,
        alldatafetched: false
    }

    componentDidMount() {
        this.getlocation();

    }

    updateButtonClicked = () => {
        this.setState({ alldatafetched: false, hourlyData: [] })
        this.getlocation();
        this.refs.HourlyWeatherDetails.clickedtofalse();
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
        var today = new Date();
        var date = today.getDate() + '/' + (today.getMonth() + 1) + " " + ("0" + today.getHours()).substr(-2) + ':' + ("0" + today.getMinutes()).substr(-2);
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
                this.setState({ alldatafetched: true })
            });
            const hourlyData = response2.data.list;
            console.log(hourlyData);
            this.setState({ hourlyData: hourlyData });
        }))
            .catch(error => {
                console.log(error);
                this.setState({ error: error });
            });

        // previous code

        //Current forcast
        // axios
        //     .get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${this.state.API_KEY}`)
        //     .then(response => {
        // const weatherData = response.data;
        // console.log(weatherData);
        // this.setState({ weatherData: weatherData }, () => {
        //     this.nightchecker();
        //     this.setState({ alldatafetched: true })
        // });

        //     })
        //     .catch(error => {
        //         console.log(error);
        //         this.setState({ error: error });
        //     });
        // //Hourly forcast
        // axios
        //     .get(`https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${this.state.API_KEY}`)
        //     .then(response => {
        //         const hourlyData = response.data.list;
        //         console.log(hourlyData);
        //         this.setState({ hourlyData: hourlyData }, () => {
        //         });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         this.setState({ error: error });
        //     });
        // //Daily forcast is not working with this api 
        // axios
        //     .get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${this.state.latitude}&lon=${this.state.longitude}&cnt=5&APPID=${this.state.API_KEY}`)
        //     .then(response => {
        //         const dailyData = response.data.list;
        //         console.log(dailyData);
        //         this.setState({ dailyData: dailyData }, () => {
        //         });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         this.setState({ error: error });
        //     });
    }

    nightchecker = () => {

        // console.log(this.state.weatherData.sys.sunset);
        if (this.state.weatherData.sys.sunset > this.state.weatherData.dt && this.state.weatherData.sys.sunrise < this.state.weatherData.dt) {
            this.setState({ night: false })
        }
        else {
            this.setState({ night: true })
        }
    }


    render() {
        return (
            <div className={ClassNames.AppContainer} style={this.state.night ? {
                background: "rgb(0, 88, 240)",
                background: "linear-gradient(0deg, rgb(0, 88, 240) 0%, rgb(1, 41, 109) 100%)"
            } : {
                    background: "gb(122, 170, 254)",
                    background: "linear-gradient(0deg, rgb(122, 170, 254) 0%, rgb(0, 92, 250) 100%)"
                }}>
                <TemperatureModal weatherData={this.state.weatherData} />
                <CurrentWeatherDetails CurrentweatherData={this.state.weatherData} />
                <HourlyWeatherDetails ref="HourlyWeatherDetails" HourlyWeatherData={this.state.hourlyData} />
                <Footer datetime={this.state.datetime} updateButtonClicked={this.updateButtonClicked} show={this.state.alldatafetched} />
            </div>
        );
    }
}

export default AppContainer;
