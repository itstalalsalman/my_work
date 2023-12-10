import './App.scss';
import AboutUs from './components/AboutUs/aboutUs';
import MainLoad from './components/main__load/mainLoad';
import Navbar from './components/navbar/navbar';
import SolvingProblems from './components/virtual__assistant/virtualAssistanceCont';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <MainLoad />
      <AboutUs />
      <SolvingProblems />
    </div>
  );
};

export default App;
