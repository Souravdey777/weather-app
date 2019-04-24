import React from 'react';
import classNames from "./footer.module.css";
import ReactLoading from 'react-loading';


const Footer = (props) => (
  <div className={classNames.image}>
    <div className={classNames.footer}>
      <div style={{ display: "flex", flex: "1" }} />
      <div className={classNames.footercontent}>
        <div>Developed by : <b>Sourav Dey</b></div>
        {/* <div>Click here for Source Code:  <a className={classNames.a} href="https://github.com/Souravdey777/weather-app"><b><img src={githublogo} style={{width:"12px",height:"12px"}}/></b></a></div> */}
        <div>Powered by : <a className={classNames.a} href="https://openweathermap.org"><b>OpenWeatherMapAPI</b></a></div>
        <div className={classNames.update}>
          Last Updated : {props.datetime}&nbsp;&nbsp;&nbsp;
        {props.show?<i className="fa" onClick={props.updateButtonClicked} >&#xf021;</i>:<ReactLoading onClick={props.updateButtonClicked} type="spinningBubbles" color="#fff" height="13px" width="13px" />}
        </div>
      </div>
    </div>
  </div>
)

export default Footer;
