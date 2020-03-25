import React from "react";
import './About.scss';
import AboutChild from "./AboutChild/AboutChild";

const About = () => {
    const leo = 'Messi';

    return (
        <div className='About'>
            <h1>אודותינו</h1>

            <AboutChild leo={leo} />
        </div>
    )
};

export default About;