import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
  
const utility = () => (
    <div className="utility-block">
        <div className="text-center">      
            <Link to="/home">
                <img className="go-back" src="./assets/images/back.png"/>
            </Link>
            <img className="utility-title" src="./assets/images/utility-font.png"/>
            <div className="utility-content rubik-font">
                Owning a DEAD PUNKZ, offers exclusive access and benefits to owners!
            </div>
        </div>
    </div>
    
)

export default utility