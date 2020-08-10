import { ReactComponent as Icon } from 'images/run-button.svg';
import React from 'react';
import languages from 'utils/language-select';
import CodeContext from '_context/code/code.context';
import './navbar.style.css';

const Navbar: React.FC = () => {
    const codeContext = React.useContext(CodeContext);

    const { code, loading, submitCode, language, updateLanguage } = codeContext;
    console.log(loading, 'Navbar');

    const onCodeSubmit = (code: string, language: string) => {
        submitCode(code, language);
    };

    const onLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateLanguage(event.target.value);
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
                    <select name='languages' onChange={onLanguageChange}>
                        {languages.map((language) => (
                            <option
                                value={language.value}
                                selected={language.selected}
                            >
                                {language.name}
                            </option>
                        ))}
                    </select>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
