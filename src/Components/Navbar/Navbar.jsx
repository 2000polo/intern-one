import React,{ useState } from 'react';
import './Navbar.css';
import Logo from '../../Assets/Logo';
import { IconContext } from 'react-icons';
import {FiMenu} from 'react-icons/fi';
import {IoClose} from 'react-icons/io5';


const Navbar = () => {

    const [menu, setMenu] = useState(false);


    const menuHandler = () =>{
        setMenu(!menu);
    }

    return(
        <div className="navbar-main-wrapper">
            <div className="logo">
                <Logo height={"20px"} width={"70px"} />
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
            <div onClick={menuHandler} className="hamburger-menu">
                <IconContext.Provider value={{size: "25px", color: "black"}}>
                    <FiMenu />
                </IconContext.Provider>
            </div>
            {
                    menu &&
            <div className="hmenu-links">
                <div onClick={menuHandler} className="close">
                    <IconContext.Provider value={{size:"25px", color:"black"}}>
                        <IoClose />
                    </IconContext.Provider>
                </div>
                    <ul className="hnav-links">
                    <li className="link"><a href="#">Why Form?</a></li>
                    <li className="link"><a href="#">Features</a></li>
                    <li className="link"><a href="#">Discover</a></li>
                    <li className="link"><a href="#">Future</a></li>
                    <li className="link"><a href="#">Get Started</a></li>
                </ul>
                
            </div>
            }
        </div>
    )
}

export default Navbar;
