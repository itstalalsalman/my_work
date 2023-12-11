import './App.scss';
import AboutUs from './components/AboutUs/aboutUs';
import MainLoad from './components/main__load/mainLoad';
import Navbar from './components/navbar/navbar';
import SolvingProblems from './components/virtual__assistant/virtualAssistanceCont';
import CoreValues from './components/core__values/coreValues';
import GridExample from './components/our__works/ourWork';
import WeAreHiringContainer from './components/hiring/hiring';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <MainLoad />
      <AboutUs />
      <SolvingProblems />
      <CoreValues />
      <GridExample />
      <WeAreHiringContainer />
    </div>
  );
};

export default App;
