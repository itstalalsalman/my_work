import React from "react";
import './virtualAssistanceCont.scss';


const BenChat = () => {
    return (
        <div className="text__VA__container">
            <img src="/images/ThumbLeft.png" alt="left-thumb"/>
            <h2>We love solving problems!</h2>
            <img src="/images/ThumbRight.png" alt="right-thumb"/>
            
            <div>
                <p>X</p>
                <img src="/images/BenChatBot.png" alt="ben-chat"/>
            </div>
        </div>
    );
};



const SolvingProblems = (props) =>
{
    return (
        <div className="solving__prob__container">
            
            <BenChat />
            <div className="chat__box">
                <div>
                    <p>
                        Hi! I am Ben, your virtual assistant. 
                        How can I make your day better?
                    </p>
                </div>
            </div>
        </div>
    );
};


export default SolvingProblems;