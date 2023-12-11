import React from "react";
import './navbar.scss';
import $ from "jquery";



const Navbar = (props) => {

    return (
        <div className="navbar__container">
            <div className="inside__navbar">
                <div className="logo__img__container">
                    <img src="/images/Group_15.png" alt="img_logo"/>
                </div>
                <div className="navbar__text__items__btn">
                    <ul className="li__items">
                        <li>StartUps</li>
                        <li>Contact</li>
                    </ul>
                    <button className="work__btn">Work with us!</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
