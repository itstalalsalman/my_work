import React from "react";
import './mainLoad.scss';
import $ from "jquery";

$(document).ready(function () { 
var intervalId;

    $(".what__we__do").addClass("active");        
    $("p").animate({
        opacity: 1,
        bottom: 0 // Slides up 20px to its final position
      }, 500);

    var $fillLayer = $('<div class="fill-layer"></div>');
    var $paragraph = $('.see__work');
    
      // Append the fill layer to the button
    $('.btn__seeWork').append($fillLayer);
    
      // Animate the fill layer
    $fillLayer.animate({
        width: '190%' // Fills from bottom to top
    }, 800, function() {
        // Fill animation complete, reveal the text
    $paragraph.animate({
          opacity: 1
    }, 800);
        
        // Animate the fill layer back to zero
    $fillLayer.animate({
          width: 0 // Moves back down
        }, 1200);
    });
    

});    

const MainLoadText = () => {
    return (
        <div className="text__container">
            <h1 className="what__we__do">We Create Startups.</h1>
            <p>We are startup studio that develops and launches new companies.</p>
            <button className="btn__seeWork">
                <div className="see__work">See our works</div>
            </button>
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