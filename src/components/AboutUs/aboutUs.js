import React, {useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import './aboutUs.scss';



const WhoWeAreText = () => {
    return (
        <div className="text__holder__container">
            <h4>Who we are</h4>            
            <p className="typewriter">
                We create products that have innovation and technology at their core. 
                <br/>We value working with talented people that understand the possibilities of today.
            </p>
            <img src="/images/question.png" alt="question" className="question-mark"/>
        </div>
    );
};


const WhatWeDO = () => {
    
    return (
        <div className="what__we__do__grid">
            <div>
                <h6 className="slide-in bottom">01</h6>
                <p></p>
                <h5 className="slide-in-lft">
                    We develop innovative 
                    products, systems and 
                    services
                </h5>
            </div>
            <div className="grid__container">
                <h6 className="slide-in bottom">02</h6>
                <p></p>
                <h5 className="slide-in-lft">
                    Next we build teams to scale them into companies
                </h5>
            </div>
            <div className="grid__container">
                <h6 className="slide-in bottom">03</h6>
                <p></p>
                <h5 className="slide-in-lft">
                    Each startup solving one problem 
                    at a time
                </h5>
            </div>
        </div>
    );
};

const AboutUs = (props) => {
    
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
    
      useEffect(() => {
        if (inView) {
          document.querySelectorAll('.slide-in').forEach((element) => {
            element.classList.add('animate-slide');
          });

          document.querySelectorAll('.slide-in-lft').forEach((element) => {
            element.classList.add('animate-slide-left');
          });

          document.querySelector(".typewriter").classList.add('typewriter-text');
        }


    }, [inView]);

    return (
        <div className="about__us__container" ref={ref}>
            <WhoWeAreText />
            <WhatWeDO />
        </div>
    );
};

export default AboutUs;