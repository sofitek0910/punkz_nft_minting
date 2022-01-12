import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
  
const Landing = () => (
    <div className="landing">      
        <video class="welcome-video width-100" id="video" muted autoplay={"autoplay"}>
            <source src="./assets/images/landing_video3.mp4" type="video/mp4"/>
        </video>
        {/* <button className="enter-btn">enter</button> */}
        <a href="/home"><img className="width-100 enter-img" src="./assets/images/enter.png"/></a>
    </div>
)

export default Landing