import React from 'react';
import './Structure.css';

const Structure = () => {
    return (
        <div className="structure-main-wrapper">
            <h1 className="structure-heading">
                Structure Your Form
            </h1>
            <p className="structure-para">
            Our starter pack comes with a collection of tools to help you:
            </p>

            <ul className="structure-list">
                <li className="item">01. Greet new members</li>
                <li className="item">02. Rally around common obsessions</li>
                <li className="item">03. Publish your thoughts</li>
            </ul>

            <p className="structure-para">
            ...all while keeping discussions active, healthy, and enjoyable.
            </p>
            <p className="structure-para">
            You can also switch on any combination of optional enhancement to build a space that’s entirely for you.            </p>

        </div>
    )
}

export default Structure;