import React from 'react';
import languages from 'utils/language-options';
import CodeContext from '_context/code/code.context';

const LanguageSelector = () => {
    const codeContext = React.useContext(CodeContext);
    const { updateLanguage, language } = codeContext;

    const onLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateLanguage(event.target.value);
    };

    console.log(language);
    return (
        <div className='select__wrapper'>
            <select name='languages' onChange={onLanguageChange} value={language}>
                {languages.map((language) => (
                    <option value={language.value} key={language.value}>
                        {language.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
