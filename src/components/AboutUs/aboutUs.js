import React from "react";
import './aboutUs.scss';

const WhoWeAreText = () => {
    return (
        <div className="text__holder__container">
            <h4>Who we are</h4>            
            <p>
                We create products that have innovation and technology at their core. 
                <br/>We value working with talented people that understand the possibilities of today.
            </p>
            <img src="/images/question.png" alt="question"/>
        </div>
    );
};


const WhatWeDO = () => {
    return (
        <div className="what__we__do__grid">
            <div>
                <h6>01</h6>
                <h5>
                    We develop innovative 
                    products, systems and 
                    services
                </h5>
            </div>
            <div className="grid__container">
                <h6>02</h6>
                <h5>
                    Next we build teams to scale them into companies
                </h5>
            </div>
            <div className="grid__container">
                <h6>03</h6>
                <h5>
                    Each startup solving one problem 
                    at a time
                </h5>
            </div>
        </div>
    );
};

const AboutUs = (props) => {
    return (
        <div className="about__us__container">
            <WhoWeAreText />
            <WhatWeDO />
        </div>
    );
};

export default AboutUs;