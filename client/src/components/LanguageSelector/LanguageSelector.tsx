import { Select, Divider } from 'antd';
import React from 'react';
import languages from 'utils/language-options';
import CodeContext from '_context/code/code.context';

const LanguageSelector = () => {
    const codeContext = React.useContext(CodeContext);
    const { updateLanguage, language } = codeContext;

    const { Option } = Select;

    const onLanguageChange = (value: string) => {
        updateLanguage(value);
    };

    return (
        <>
            <Divider orientation='left'> Select language </Divider>
            <Select
                showSearch
                style={{ width: '100%' }}
                onChange={onLanguageChange}
                value={language}
                autoFocus
                size='large'
                className='my-1'
            >
                {languages.map((language) => (
                    <Option value={language.value} key={language.value}>
                        {language.label}
                    </Option>
                ))}
            </Select>
        </>
    );
};

export default LanguageSelector;
