import React from 'react';
import './Navbar.css';
import Logo from '../../Assets/Logo';
import { IconContext } from 'react-icons';
import {FiMenu} from 'react-icons/fi';


const Navbar = () => {
    return(
        <div className="navbar-main-wrapper">
            <div className="logo">
                <Logo/>
            </div>
            <div className="nav-links">
                <ul className="nav">
                    <li className="link"><a href="#">Why Form?</a></li>
                    <li className="link"><a href="#">Features</a></li>
                    <li className="link"><a href="#">Discover</a></li>
                    <li className="link"><a href="#">Future</a></li>
                    <button className="btn">Get started</button>
                </ul>
            </div>
            <div className="hamburger-menu">
                <IconContext.Provider value={{size: "25px", color: "black"}}>
                    <FiMenu />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Navbar;
