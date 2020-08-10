import React from 'react';
import './navbar.style.css';
import LanguageSelector from './LanguageSelector';
import RunCodeButton from './RunCodeButton';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <RunCodeButton />
                </li>
                    <LanguageSelector />
                <li>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
