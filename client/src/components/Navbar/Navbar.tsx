import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import './navbar.style.css';
import RunCodeButton from './RunCodeButton';



const Navbar : React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/' className='nav__item'>
                        {' '}
                        Home{' '}
                    </Link>
                </li>
                <li>
                    <RunCodeButton />
                </li>
                <li>
                    <LanguageSelector />
                </li>
                <li>
                    <Link to='/snippets' className='nav__item'>
                        Snippets
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
