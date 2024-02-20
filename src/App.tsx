import React from 'react';
import './assest/index.css';
import Header from './components/Header/Header';
import MainInfo from './components/body/MainInfo/MainInfo';
import Accordions from './components/body/Accordions/Accordions';
import Slider from './components/body/Slider/Slider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainInfo />
      <Accordions />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
