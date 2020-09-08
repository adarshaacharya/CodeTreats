import { Select, Divider } from 'antd';
import React from 'react';
import languages from 'config/editor/languages';
import CodeContext from '_context/code/code.context';
const { Option } = Select;

const LanguageSelector = () => {
    const { updateLanguage, language } = React.useContext(CodeContext);

    const onLanguageChange = (value: string) => {
        updateLanguage(value);
    };

    return (
        <>
            <Divider orientation='left' plain>
                {' '}
                Select language{' '}
            </Divider>
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
