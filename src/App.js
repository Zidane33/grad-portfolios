import React from 'react';
import './style.css';
import Nav from './nav';
import Header from './main-header';
import Cta from './cta';


function App() {
  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
      <Nav />
      <Header />
      <Cta />
    </div>
  );
}

export default App;
