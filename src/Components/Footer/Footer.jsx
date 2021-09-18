import React from 'react';
import './Footer.css';
import Logo from '../../Assets/Logo';

const Footer = () => {
    return(
        <div className="footer-main-wrapper">
            <h1 className="footer-head">
                <Logo height={"40"} width={"130px"}></Logo>
            </h1>

            <p className="footer-para">
                Empowering community by fostering thoughtful connection
            </p>
            <div className="footer-lists">
                <ul className="footer-list">
                    <li className="list-head">Elsewhere</li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Github</a></li>
                </ul>
                
                <ul className="footer-list">
                    <li className="list-head">Explore</li>
                    <li><a href="#">Why Forem</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Future</a></li>
                </ul>
            </div>
            <div className="footer-lists">
                <ul className="footer-list">
                    <li className="list-head">Resources</li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
                
                <ul className="footer-list">
                    <li className="list-head">Download</li>
                    <li><a href="#">Google Extension</a></li>
                    <li><a href="#">Safari Extension</a></li>
                </ul>
            </div>
            
            <p className="footer-para">
                Made globaly with love.
            </p>


        </div>
    )
}

export default Footer;