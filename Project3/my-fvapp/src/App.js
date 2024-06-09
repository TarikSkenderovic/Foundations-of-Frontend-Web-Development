import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Subscribe from './components/Subscribe';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className='f-heading'>
        <h1>About</h1>
        <p>A Knight sworn to the forces of darkness.
A creature which feeds on pain.
A stranger searching for answers.</p>
        </div>
      <Features/>
      <Services/>
      <Subscribe/>
    </div>
  );
}


export default App;
