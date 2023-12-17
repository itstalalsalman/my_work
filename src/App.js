import React, {useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import AboutUs from './components/AboutUs/aboutUs';
import MainLoad from './components/main__load/mainLoad';
import Navbar from './components/navbar/navbar';
import SolvingProblems from './components/virtual__assistant/virtualAssistanceCont';
import CoreValues from './components/core__values/coreValues';
import OurWorkContainer from './components/our__works/ourWork';
import ContactUsForm from './components/form/form';
import WeAreHiringContainer from './components/hiring/hiring';
import Footer from './components/footer/footer';


function ScrollCustoms(targetPosition){
  const scrollDuration = 100;
  const delay = 300; 
  setTimeout(() => { // Add initial delay
    const startTime = performance.now();
    const startPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    function easeInOut(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t } // Ease-in-out function

    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const scrollProgress = Math.min(elapsedTime / scrollDuration, 1);
        const easedProgress = easeInOut(scrollProgress); // Apply the easing function
        const newPosition = startPosition + (targetPosition - startPosition) * easedProgress;

        window.scrollTo(0, newPosition);

        if (scrollProgress < 1) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
  }, delay);
}

function App() {
  const ourWorkRef = useRef(null);
  const hiringRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
      console.log(ourWorkRef); // Check what's logged for the ref
  }, [ourWorkRef, hiringRef, formRef]);

  const scrollToOurWork = () => {
     // Duration in milliseconds
    const targetPositionOurWork = ourWorkRef.current.offsetTop; // Get the target element's position
     // Initial delay in milliseconds

    if (ourWorkRef.current) {
        ScrollCustoms(targetPositionOurWork);
    }    
  };

  const scrollToHiring = () =>
  {
    const targetPositionHiring = hiringRef.current.offsetTop;
    if(hiringRef.current){
      ScrollCustoms(targetPositionHiring);
    }

  };

  const scrollToForms = () => 
  {
    const targetPositionHiring = formRef.current.offsetTop;
    if(formRef.current){
      ScrollCustoms(targetPositionHiring);
    }
  };

  


  return (
    <div className='App'>
      <Navbar scrollToHiring={scrollToHiring} scrollToForms={scrollToForms}/>
      <MainLoad scrollToB={scrollToOurWork}/>
      <AboutUs />
      <SolvingProblems />
      <CoreValues />
      <div ref={ourWorkRef}>
        <OurWorkContainer />
      </div>
      <div ref={hiringRef}>
        <WeAreHiringContainer />
      </div>
      <div ref={formRef}>
        <ContactUsForm />
      </div>
      <Footer refToEmail={scrollToForms}/>
      
    </div>
  );
};

export default App;
