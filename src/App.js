import React from 'react';
import './style.css';
import Nav from './nav';
import Header from './main-header';
import Cta from './cta';
import Footer from './footer';


function App() {
  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
      <Nav />
      <Header />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
