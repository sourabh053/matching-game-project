import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from './pages/Intro';
import Introagain from './pages/Introagain';
import Finalintro from './pages/Finalintro';
import Instructions from './pages/Instructions';
import Activity from './pages/Activity';
import FinalScreen from './pages/FinalScreen';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/start" element={<Introagain />} />
        <Route path="/next" element={<Finalintro />} />
        <Route path="/yes" element={<Instructions />} />
        <Route path="/play" element={<Activity/>} />
        <Route path="/final" element={<FinalScreen/>} />
        <Route path="*" element={"No route available"} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
