import React, {useState} from "react";
import './ourWork.scss';


const WorkHead = () => {
    const ourColor = {
        'color' : '#3D4F5C',
        'font-weight' : '600'
    }
    return(
        <div className="head">
            <h1 className="our_work_head" style={ourColor}>Our Works</h1>
        </div>
    );

};

const WorksGrid = () => {
    const [transformedDiv, setTransformedDiv] = useState(null);

    const handleHover = (index) => {
        setTransformedDiv(index);
    };

    const handleLeave = () => {
        setTransformedDiv(null);
    };

    const tolqStyle = {
        'color' : '#A9BC87'
    };

    const feedbackClr = {
        'color' : '#8BB5C9'
    };  

    const codeKeeperClr = {
        'color' : '#00A0B6'
    };

    const legalClr = {
        'color' : '#8B60D3'
    };
    
     return (
        <div className="our__works__grid">
            <div className={`work work__tolq ${transformedDiv === 1 ? 'transformed' : ''}`}>
                <h5 style={tolqStyle}>Tolq</h5>
                <p>
                    Tolq is the translation solution built for e-commerce.
                    It provides all pieces of the localization puzzle in one single integrated solution.
                </p>
                <img src="/images/Tolq.jpg" alt="tolq" className="grid_img"/>
                <button className="btn__More"
                onMouseEnter={() => handleHover(1)}
                onMouseLeave={handleLeave}
                onClick={() => window.open("https://tolq.com/", "_blank")}>More</button>
                </div>
            <div className={`work work__feedback ${transformedDiv === 2 ? 'transformed' : ''}`}>
                <h5 style={feedbackClr}>Feedback Labs</h5>
                <p>
                    Feedback Labs turns feedback into actionable insights for your team.
                </p>
                <img src="/images/feedback.jpg" alt="feedback" className="grid_img"/>
                <button className="btn__More"
                onMouseEnter={() => handleHover(2)}
                onMouseLeave={handleLeave}
                onClick={() => window.open("https://feedbacklabs.org/" ,"_blank")}>More</button>
            </div>
            <div className={`work work__codeKeeper ${transformedDiv === 3 ? 'transformed' : ''}`}>
                <h5 style={codeKeeperClr}>CodeKeeper</h5>
                <p>
                    Codekeeper is an all-in-one solution for software developers and publishers to provide source code 
                    escrow as part of service level and license agreements.
                </p>
                <img src="/images/codekeeper.jpg" alt="codekeeper" className="grid_img"/>
                <button className="btn__More"
                onMouseEnter={() => handleHover(3)}
                onMouseLeave={handleLeave}
                onClick={() =>  window.open("https://www.google.com/aclk?sa=l&ai=DChcSEwjw2tin8ZSDAxUvWUECHYu_COMYABAAGgJ3cw&ase=2&gclid=Cj0KCQiAsvWrBhC0ARIsAO4E6f_QkPzjmnW-gUOpjKDqPNsv9ZakpYfK8McMHazLF5ViEaMC_iV6QkwaAjKYEALw_wcB&sig=AOD64_0Y6fGHUsFInBGAuiLhk9MmQisOEA&q&nis=4&adurl&ved=2ahUKEwi24tGn8ZSDAxXiS_EDHUNhB_wQ0Qx6BAgGEAE" ,"_blank")}
                >More</button>
            </div>
            <div className={`work work__legalSite ${transformedDiv === 4 ? 'transformed' : ''}`}>
                <h5 style={legalClr}>LegalSite</h5>
                <p>
                    Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.
                </p>
                <img src="/images/legalSite.jpg" alt="legalSite" className="grid_img"/>
                <button className="btn__More"
                onMouseEnter={() => handleHover(4)}
                onMouseLeave={handleLeave}
                onClick={() => window.open("https://legalsite.co/" ,"_blank")}>More</button>
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


