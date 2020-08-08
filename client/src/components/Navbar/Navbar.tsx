import React from 'react';
import './navbar.style.css';
import { ReactComponent as Icon } from 'images/run-button.svg';

type Props = {
    handleSubmit: (code: string) => void;
    code: string;
    loading: boolean;
};

const Navbar: React.FC<Props> = ({ handleSubmit, code, loading }) => {
    console.log(loading);

    return (
        <nav>
            <ul>
                <button
                    className='submit'
                    onClick={() => handleSubmit(code)}
                    disabled={loading}
                >
                    Run <Icon className="run"/>
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
