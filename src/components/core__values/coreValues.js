import React, {useEffect, useRef} from "react";
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
                <h6>01. Innovation</h6>
                <p></p>
                <h5>
                    Startupz operates where entrepreneurship 
                    and technology intersect. We design solutions and turn them into businesses models.
                </h5>
            </div>
            
            <div>
            <h6>02. People</h6>
                <p></p>
                <h5 className="talent">
                    Talent is what enable us to create great companies.
                </h5>
            </div>
        </div>
    );
}



const CoreValues = (props) => {
    
    return (
        <div className="core__values__container">
            <OurCoreValues />
            <CoreValueGrid />
        </div>
    );
};

export default CoreValues