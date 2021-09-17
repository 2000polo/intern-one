import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <div className="header-main-wrapper">
            <div className="background">
                <div className="bg bg1"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3">
                    <h1 className="main-para">
                        Forem Is The New Community Web
                    </h1>
                    <p className="header-para">
                        Transparency, accessibility, and security through open source.
                    </p>
                    <div className="btn-grp">
                        <button className="header-btn">Why Forem?</button>
                        <button className="header-btn h-btn2">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;