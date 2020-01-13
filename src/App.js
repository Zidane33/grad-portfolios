import React from 'react';
import './style.css';
import Nav from './nav';
import Hero from './main-header';
import Cta from './cta';


function App() {
  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
      <Nav />
      <Hero />
      <Cta />
    </div>
  );
}

export default App;
