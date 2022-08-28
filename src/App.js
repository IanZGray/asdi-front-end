import {BrowserRouter as Router, 
  Routes, 
  Route
  } from 'react-router-dom';
  

import logo from './logo.svg';
import './App.css';

import { MarkerProvider } from './context/context';

import Navigation from './components/navigation/navigation';
import Foots from './components/footer/footer';

import CarouselImages from './pages/carousel/carouselImages';
import StartHere from './pages/startHere/StartHere';
import OurStory from './pages/ourStory/OurStory';
import Testing from './pages/testfunctions/Testing';
import Error from './pages/error/Error';


function App() {
  return (
    <Router >
      <Navigation></Navigation>
      <MarkerProvider>
      <Routes>
        <Route path='/' element={<CarouselImages />} />
        <Route path='home' element={<CarouselImages />} />
        <Route path='starthere' element={<StartHere />} />
        <Route path='ourstory' element={<OurStory />} />
        <Route path='testing' element={<Testing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </MarkerProvider>
      <Foots />

    </Router>
  );
}

export default App;
