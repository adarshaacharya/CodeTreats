import { ReactComponent as Icon } from 'images/run-button.svg';
import React from 'react';
import CodeContext from '_context/code/code.context';
import './navbar.style.css';

const Navbar: React.FC = () => {
    const codeContext = React.useContext(CodeContext);

    const { code, loading, submitCode, language } = codeContext;
    console.log(loading);
    const handleCodeSubmit = (code: string, language: string) => {
        submitCode(code, language);
    };
    return (
        <nav>
            <ul>
                <button
                    className='submit'
                    onClick={() => handleCodeSubmit(code!, language)}
                    disabled={loading}
                >
                    Run <Icon className='run' />
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
