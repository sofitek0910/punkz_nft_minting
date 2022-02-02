import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
  
const Landing = () => (
    <div className="landing">      
        <video className="welcome-video width-100" id="video" muted autoPlay={"autoplay"}>
            <source src="./assets/images/landing_video.mp4" type="video/mp4"/>
        </video>
        <a href="/home"><img className="width-100 enter-img" src="./assets/images/enter.png"/></a>
    </div>
)

export default Landing