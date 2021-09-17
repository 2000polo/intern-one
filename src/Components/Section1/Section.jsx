import React from 'react';
import './Section.css';
const Section = () => {
    return(
        <div className="section-main-wrapper">
            <div className="quote-section">
                <h2 className="section1-head">
                The reason you joined the Internet.
                </h2>
                <p className="section1-para">
                Sharing space is supposed to bring us closer together — cyberspace shouldn't be any different.
                </p>
                <p className="section1-para">
                You deserve real estate on the Internet, not rented plots from overlords of the web.            </p>
                <p className="section1-para">
                It’s time for the Internet to be what it was meant to be — community for everyone.            </p>
            </div>
            
            <div className="card-stack">
                {/* <div className="quote">
                    Forem provides open-source tools to help you host a thriving, focused, and adaptable community.
                </div>
                <div className="card-bg">
                    
                </div> */}
                <div className="quote">
                Forem provides open-source tools to help you host a thriving, focused, and adaptable community.
                </div>

            
            </div>
        </div>
    )
}

export default Section;
