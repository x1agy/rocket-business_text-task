import React from 'react';
import './assest/index.css';
import Header from './components/Header/Header';
import MainInfo from './components/body/MainInfo/MainInfo';
import Accordions from './components/body/Accordions/Accordions';

function App() {
  return (
    <div className="App">
      <Header />
      <MainInfo />
      <Accordions />
    </div>
  );
}

export default App;
