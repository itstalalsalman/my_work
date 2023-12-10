import React from "react";
import './virtualAssistanceCont.scss';


const CenterText = () => {
    return (
        <div className="text__VA__container">
            <img src="/images/ThumbLeft.png" alt="left-thumb"/>
            <h2>We love solving problems!</h2>
            <img src="/images/ThumbRight.png" alt="right-thumb"/>
        </div>
    );
};

const BenChat = () => {
    return (
        <div className="virtual__assistance__container">
            <p>X</p>
            <img src="/images/BenChatBot.png" alt="ben-chat"/>
        </div>
    );
};


const SolvingProblems = (props) =>
{
    return (
        <div className="solving__prob__container">
            <CenterText/>
            <BenChat />
            <div className="chat__box">
                <p>
                    Hi! I am Ben, your virtual assistant. 
                    How can I make your day better?
                </p>
            </div>
        </div>
    );
};


export default SolvingProblems;