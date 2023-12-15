import React, {useRef} from "react";
import './mainLoad.scss';
import $ from "jquery";

$(document).ready(function () { 

    $(".what__we__do").addClass("active"); 
       
    $("p").animate({
        opacity: 1,
        bottom: 0 // Slides up 20px to its final position
      }, 1800);

    $(".img__main__cont").animate({
        opacity: 1,
        bottom: 0 // Slides up 20px to its final position
    }, 100);

    $(".fill").animate({
        width: "100%"
      }, 2000, function() {
        $(this).delay(200).animate({
          left: "100%",
          width: "0"
        }, 500, function() {
            
          $(".text").fadeIn();
        });
      });

    $(".btn__seeWork").on("mouseover",function () { 
        $(".text").css("color","#46B8C8");
        $(".fill").css("background-color","#46B8C8");
    });

    $(".btn__seeWork").on("mouseleave",function () { 
        $(".text").css("color","white");
        $(".fill").css("background-color","white");
    });

    

});


const MainLoadText = ({scrollToB}) => {
    
    return (
        <div className="text__container">
            <h1 className="what__we__do">We Create Startups.</h1>
            <p>We are startup studio that develops and launches new companies.</p>
            <button className="btn__seeWork" onClick={scrollToB}>
                <div className="see__work">
                    <div className="fill"></div>
                    <div class="text">See our works</div>
                </div>
            </button>
        </div>
    );
};

const MainLoadImg  = () => {
    return (
        <div className="img__main__cont">
            <img  src="/images/Untitled_Artwork_Main.png" className="mainLoad__her__img activeImg"  alt="we__create__img" />
        </div>
    );
};

const MainLoad = ({scrollToB}) => {

    return (
        <div className="main__background__page">
            <MainLoadText scrollToB={scrollToB}/>
            <MainLoadImg />
        </div>
    )

};


export default MainLoad;

