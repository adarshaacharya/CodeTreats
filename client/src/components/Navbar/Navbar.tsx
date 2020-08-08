import React from 'react';
import './navbar.style.css';

type Props = {
    handleSubmit: (code: string) => void;
    code : string;
};

const Navbar: React.FC<Props> = ({ handleSubmit, code}) => {
    return (
        <nav>
            <ul>
                <button className='submit' onClick={() => handleSubmit(code)}>Run 🏃🏻‍♀️</button>
            </ul>
        </nav>
    );
};

export default Navbar;
