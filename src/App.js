import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  // helpful to think of JSX injection as a function that uses "document.createElement(JSX)"; the way React uses JSX behind the scenes is similar to document.createElement()
  return (
    <div>
      <Nav></Nav>
      <main>
        <About>

        </About>
      </main>
    </div>
  );
}


export default App;
