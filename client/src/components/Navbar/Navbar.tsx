import { ReactComponent as Icon } from 'images/run-button.svg';
import React from 'react';
import CodeContext from '_context/code/code.context';
import './navbar.style.css';
import languages from 'utils/language-select';

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
                <li>
                    <button
                        className='submit'
                        onClick={() => handleCodeSubmit(code!, language)}
                        disabled={loading}
                    >
                        Run <Icon className='run' />
                    </button>
                </li>
                <li>
                    <select name='languages'>
                        {languages.map((language) => (
                            <option value={language}>{language}</option>
                        ))}
                    </select>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
