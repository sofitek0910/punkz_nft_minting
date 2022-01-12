import React, { useEffect, useState } from "react";

const [toggleMenu, setToggleMenu] = useState(false);

const toggleNav = () => {
    setToggleMenu(!toggleMenu)
}
useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth);
    return () => {
        window.removeEventListener('resize', changeWidth)
    }
  }, []);
  
const Header = () => (
  <div>
      <div className="top-section">
            <div className="top-icon-block">
                <a href="#">
                    <img className="top-icon" src="./assets/images/discord.png"/>
                </a>
                <a href="#">
                    <img className="top-icon" src="./assets/images/instagram.png"/>
                </a>
                <a href="#">
                    <img className="top-icon" src="./assets/images/twitter.png"/>
                </a>
				<a href="#">
                    <img className="top-icon" src="./assets/images/video.png"/>
                </a>
                <a href="#">
                    <img className="top-icon" src="./assets/images/group.png"/>
                </a>
            </div>
        </div>
        
        <header className="navbar-block">
            <nav> 
                <img className="logo-image" src="./assets/images/logo.png"/>
                {(toggleMenu || screenWidth > 1060) && (
                    <div className="menu-block">
                        <ul className="list">
                            <li className="items"><a className="nav-item" href="#buy">Buy</a></li>
                            <li className="items"><a className="nav-item" href="#roadmap">Roadmap</a></li>
                            <li className="items"><a className="nav-item" href="#team">Team</a></li>
                            <li className="items"><a href="#"></a>gallery</li>
                            <li className="items"><a href="#"></a>members</li>
                        </ul>
                    </div>
                )}
                <button onClick={toggleNav} className="menu-btn">MENU</button>
            </nav>
        </header>
  </div>
)

export default Header