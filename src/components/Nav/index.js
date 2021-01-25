import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


const Nav = (props) => {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
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
                        <a data-testid='about' href='#about'>
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* whenever we map over anything in JSX, the outermost element must have a unique 'key' attribute, which helps React keep track of items in the virtual DOM */}
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category)}}>
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