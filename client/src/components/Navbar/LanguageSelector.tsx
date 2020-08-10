import React from 'react';
import languages from 'utils/language-select';
import CodeContext from '_context/code/code.context';

const LanguageSelector = () => {
    const codeContext = React.useContext(CodeContext);

    const { code, loading, submitCode, language, updateLanguage } = codeContext;

    const onLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateLanguage(event.target.value);
    };
    return (
        <>
            <select name='languages' onChange={onLanguageChange}>
                {languages.map((language) => (
                    <option value={language.value} selected={language.selected}>
                        {language.name}
                    </option>
                ))}
            </select>
        </>
    );
};

export default LanguageSelector;
