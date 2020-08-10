import React from 'react';
import LanguageSelector from './LanguageSelector';
import './navbar.style.css';
import RunCodeButton from './RunCodeButton';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <RunCodeButton />
                </li>
                <li>
                    <LanguageSelector />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
