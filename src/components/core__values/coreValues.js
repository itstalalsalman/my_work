import React, {useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import './coreValues.scss';
import $ from "jquery";



const OurCoreValues = () => {
    return (
        <div className="core__value__heading">
            <h1>Our core values</h1>    
            <img src="/images/valuesbulb.png" alt="bulb"/>
        </div>
    );
};

const CoreValueGrid = () => {

    
    return(
        <div className="core__grid">
            <div>
                <h6 className="slide-in-core bottom">01. Innovation</h6>
                <p></p>
                <h5 className="slide-in-core-lft">
                    Startupz operates where entrepreneurship 
                    and technology intersect. We design solutions and turn them into businesses models.
                </h5>
            </div>
            
            <div>
            <h6 className="slide-in-core bottom">02. People</h6>
                <p></p>
                <h5 className="slide-in-core-lft talent">
                    Talent is what enable us to create great companies.
                </h5>
            </div>
        </div>
    );
}



const CoreValues = (props) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.7,
      });
    
      useEffect(() => {
        if (inView) {
          document.querySelectorAll('.slide-in-core').forEach((element) => {
            element.classList.add('animate-slide-core');
          });

          document.querySelectorAll('.slide-in-core-lft').forEach((element) => {
            element.classList.add('animate-slide-left-core');
          });

        
        }


    }, [inView]);

    return (
        <div className="core__values__container" ref={ref}>
            <OurCoreValues />
            <CoreValueGrid />
        </div>
    );
};

export default CoreValues