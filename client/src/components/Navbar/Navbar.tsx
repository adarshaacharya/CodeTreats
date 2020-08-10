import { ReactComponent as Icon } from 'images/run-button.svg';
import React from 'react';
import CodeContext from '_context/code/code.context';
import LanguageSelector from './LanguageSelector';
import './navbar.style.css';

const Navbar: React.FC = () => {
    const codeContext = React.useContext(CodeContext);

    const { code, loading, submitCode, language, updateLanguage } = codeContext;

    const onCodeSubmit = (code: string, language: string) => {
        submitCode(code, language);
    };

    return (
        <nav>
            <ul>
                <li>
                    <button
                        className='submit'
                        onClick={() => onCodeSubmit(code!, language)}
                        disabled={loading}
                    >
                        Run <Icon className='run' />
                    </button>
                </li>
                <li>
                    <LanguageSelector />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
