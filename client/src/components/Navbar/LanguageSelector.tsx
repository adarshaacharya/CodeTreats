import React from 'react';

const LanguageSelector = () => {
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
