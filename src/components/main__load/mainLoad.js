import React from "react";
import './mainLoad.scss';
//import $ from "jquery";

const Navbar = () => {
    return (
        <div className="navbar__container">
            <div className="logo__img__container">
                <img src="/images/Group_15.png" alt="img_logo"/>
            </div>
            <div className="navbar__text__items__btn">
                <ul className="li__items">
                    <li>StartUps</li>
                    <li>Contact</li>
                </ul>
                <button className="work_btn">Work with us!</button>
            </div>
        </div>
    );
};



const MainLoad = (props) => {
   

    return (
        <div className="main__background__page">
            <Navbar />  
        </div>
    )

};


export default MainLoad;