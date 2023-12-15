import React from "react";
import './ourWork.scss';






const WorkHead = () => {

    return(
        <h1>Our Works</h1>
    );

};

const WorksGrid = () => {
    return (
        <div className="our__works__grid">
            <div className="work__tolq">
                <h5>Tolq</h5>
                <p>
                    Tolq is the translation solution built for e-commerce.
                    It provides all pieces of the localization puzzle in one single integrated solution.
                </p>
                <img src="/images/Tolq.jpg" alt="tolq"/>
                <button>More</button>
            </div>
            <div className="work__feedback">
                <h5>Feedback Labs</h5>
                <p>
                    Feedback Labs turns feedback into actionable insights for your team.
                </p>
                <img src="/images/feedback.jpg" alt="feedback"/>
                <button>More</button>
            </div>
            <div className="work__codekeeper">
                <h5>CodeKeeper</h5>
                <p>
                    Codekeeper is an all-in-one solution for software developers and publishers to provide source code 
                    escrow as part of service level and license agreements.
                </p>
                <img src="/images/codekeeper.jpg" alt="codekeeper"/>
                <button>More</button>
            </div>
            <div className="work__legalSite">
                <h5>LegalSite</h5>
                <p>
                    Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.
                </p>
                <img src="/images/legalSite.jpg" alt="legalSite"/>
                <button>More</button>
            </div>
        </div>
    );
};

const WorkMoto = () => {
    return (
        <div className="moto__container">
            <img src="/images/ThumbLeft.png" alt="thumb_left"/>
            <p>
                Startups create a world that actually is better.
                Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.
            </p>
            <img src="/images/ThumbRight.png" alt="thumb_right" />
        </div>
    )
};


const OurWorkContainer = (props) => {
    return(
        <div className="our__work__container">
            <WorkHead />
            <WorksGrid />
            <WorkMoto />
        </div>
    );
};

export default OurWorkContainer;


