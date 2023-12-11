import React from "react";
import './mainLoad.scss';
import $ from "jquery";

$(document).ready(function () {
    
});

const MainLoadText = () => {
    return (
        <div className="text__container">
            <h1>We Create Startups.</h1>
            <p>We are startup studio that develops and launches new companies.</p>
            <button className="btn__seeWork">See our works</button>
        </div>
    );
};

const MainLoadImg  = () => {
    return (
        <div className="img__main__cont">
            <img src="/images/Untitled_Artwork_Main.png" className="mainLoad__her__img"  alt="we__create__img" />
        </div>
    );
};

const MainLoad = (props) => {
  

    return (
        <div className="main__background__page">
            <MainLoadText />
            <MainLoadImg />
        </div>
    )

};


export default MainLoad;