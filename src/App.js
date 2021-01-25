import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  // initializing category state and using 'useState()' hook to enable category change
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    {
      name: 'portraits',
      description: 'Portraits of people in my life',
    },
    {
      name: 'food',
      description: 'Delicious delicacies',
    },
    {
      name: 'landscape',
      description: 'fields, farmhouses, waterfalls, and the beauty of nature',
    },
  ]);

  // first parameter is value of state and second is a setter which allows state change; then passing initial state '0' to useState(), which always returns an array
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // helpful to think of JSX injection as a function that uses "document.createElement(JSX)"; the way React uses JSX behind the scenes is similar to document.createElement()
  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}


export default App;
