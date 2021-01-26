import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  // initial value is set to false to prevent contact form from showing when user initially navigates to homepage
  const [contactSelected, setContactSelected] = useState(false);

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
      {/* these are props to allow Nav component to modify state and conditionally render */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* if 'contactSelected' is false, Gallery and About elements will render, otherwise ContactForm will render; the '?' and ":" comprise a 'ternary operator' */}
        {!contactSelected ? (
          // these are 'React fragments', shorthand for <React.fragment> and </React.fragment>, which allow multiple elements to be grouped together; the JSX rule of only returning a single parent element is satisfied by wrapping children componenets within these React fragments.
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}


export default App;
