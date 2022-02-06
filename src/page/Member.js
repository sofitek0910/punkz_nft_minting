import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
  
const member = () => (
    <div className="utility-block">
        <div className="text-center">   
            <a href="/home">
                <img className="go-back" src="./assets/images/back.png"/>
            </a>   
            <div className="member-title title-font">members</div>
        </div>
        <div className="row">
            <div className="col-sm-10 member-content rubik-font">
                welcome spooky skelly # traits
            </div>
            <div className="col-sm-2 text-center">
                <img className="trait-image" src="./assets/images/bingo_image.jpg"/>
            </div>
        </div>
        <div className="member-page-footer text-center rubik-font">
            we are in the midst of initializing phase 2 <br/>
            phase 1 completion trackerd % complete
        </div>
    </div>
    
)

export default member