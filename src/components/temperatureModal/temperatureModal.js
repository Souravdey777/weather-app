import React, { Component } from 'react';
import ClassNames from './temperatureModal.module.css';
import ReactAnimatedWeather from 'react-animated-weather';

let lastScrollY = 0;

class TemperatureModal extends Component {


    componentWillMount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    tempModal = React.createRef();
    description = React.createRef();
    maxmixtemp = React.createRef();

    handleScroll = () => {
        lastScrollY = window.scrollY;

        if (lastScrollY > 50) {
            this.tempModal.current.style.width = "100px";
            this.tempModal.current.style.height = "100px";
            this.description.current.style.opacity = "0";
            this.maxmixtemp.current.style.opacity = "0";
        }
        else {
            this.tempModal.current.style.width = "250px";
            this.tempModal.current.style.height = "250px";
            this.description.current.style.opacity = "1";
            this.maxmixtemp.current.style.opacity = "1";
        }
    };


    render() {


        const { getName } = require('country-list');
        return (
            <div>
                {this.props.weatherData? (
                    <div ref={this.tempModal} className={ClassNames.tempModal} style={{
                        color: "rgba(74,140,255)"
                        // color: "rgb(198, 102, 0)"
                    }}>
                        <div ref={this.description} className={ClassNames.description}>
                            <ReactAnimatedWeather
                                icon="CLEAR_DAY"
                                color="rgb(74,140,255)"
                                size={108}
                                animate={true}
                            />
                            {this.props.weatherData.weather.map(content => {
                                return (content.description.charAt(0).toUpperCase() + content.description.slice(1))
                            })}
                        </div>
                        <div className={ClassNames.temp}>
                            {(this.props.weatherData.main.temp - 273.15).toFixed(2)}°C
                            <div ref={this.maxmixtemp} className={ClassNames.maxmixtemp} >
                                <div>↑{(this.props.weatherData.main.temp_max - 273.15).toFixed(2)}°C</div>
                                <div>↓{(this.props.weatherData.main.temp_min - 273.15).toFixed(2)}°C</div>
                            </div>
                        </div>
                        <div className={ClassNames.city}>
                            {this.props.weatherData.name}, {
                                getName(`${this.props.weatherData.sys.country}`)}
                        </div>
                    </div>) : null
                }
            </div>
        );
    }
}

export default TemperatureModal;
