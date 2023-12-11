import React from "react";
import './hiring.scss';

const HiringText = () => {
    return (
        <div className="we__are__hiring">
            <div>
                <img src="/images/hiringLeft.png" alt="exclamation"/>
            </div>
            <div>
                <h4>We are hiring</h4>
                <p>
                    We're always looking for talented people to join and help build our startups.
                    Check out our current openings
                </p>
                <button>See current openings</button>
            </div>
            <div>
                <img src="/images/hiringRight.png" alt=""/>
            </div>

        </div>
    );
};


const WeAreHiringContainer = (props) => {
    return (
        <HiringText />   
    );

};  


export default WeAreHiringContainer;