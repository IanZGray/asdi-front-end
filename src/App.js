import {BrowserRouter as Router, 
  Routes, 
  Route
  } from 'react-router-dom';
  

import './App.css';


import Navigation from './components/navigation/navigation';
import Foots from './components/footer/footer';

import CarouselImages from './pages/carousel/carouselImages';
import StartHere from './pages/startHere/StartHere';
import Error from './pages/error/Error';


function App() {
  return (
    <Router >
      
      <Navigation></Navigation>

      <Routes>
        <Route path='/' element={<CarouselImages />} />
        <Route path='home' element={<CarouselImages />} />
        <Route path='starthere' element={<StartHere />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Foots />

    </Router>
  );
}

export default App;
