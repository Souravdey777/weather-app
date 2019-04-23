import React from 'react';
import classNames from "./footer.module.css";

const Footer=(props)=> (
      <div className={classNames.footer}>
        <div className={classNames.footercontent}>last updated : {props.datetime}
        {/* <button onClick={props.updateButtonClicked}>chck</button> */}
            </div>
      </div>
    )

export default Footer;
