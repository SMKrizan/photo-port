import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


const Nav = (props) => {
    // deconstructs getter and setter functions from props
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected, 
    } = props;

    // useEffect() is an API reflecting lifecycle methods of component
    // invoking useEffect() and assigning DOM node in the fn body of the cb fn, where 1st argument 'capitalizeFirstLetter(currentCategory.name)' is cb fn and 2nd argument '[currentCategory]' is array with single element 'currentCategory'; this 2nd argument directs hook to re-render component on changes to state value --> e.g. if currentCategory changes, component will re-render so that user sees change in document.title
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);    
    
    return (
        <header className='flex-row px-1'>
            <h2>
                <a data-testid='link' href='/'>
                    <span role='img' aria-label='camera'> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        {/* when 'about' is selected from Nav, 'contactSelected' is set to false and About is rendered */}
                        <a data-testid='about' href='#about' onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    {/* if 'contactSelected' is true, indicating user has selected 'Contact' CSS class 'navActive' is applied; note use of '{ }' to contain this JS expression and template literal to interpolate JS statement  */}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {/* whenever we map over anything in JSX, the outermost element must have a unique 'key' attribute, which helps React keep track of items in the virtual DOM */}
                    {categories.map((category) => (
                        // note that 'navActive' class is applied only if 'Contact' has not been selected and current category HAS
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && !contactSelected && 'navActive'
                        }`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false)}}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;