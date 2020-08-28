import { Divider, Select } from 'antd';
import { defaultThemes, monacoThemes } from 'config/editor/themes';
import React from 'react';
import { defineTheme } from 'utils/define-theme';
import ThemeContext from '_context/theme/theme.context';

const { Option, OptGroup } = Select;
const ThemeSelector = () => {
    const themeContext = React.useContext(ThemeContext);
    const { theme, updateTheme } = themeContext;

    const handleThemChange = (theme: string) => {
        if (defaultThemes.includes(theme)) {
            updateTheme(theme);
        } else {
            defineTheme(theme).then((_) => updateTheme(theme));
        }
    };

    return (
        <>
            <Divider orientation='left' plain>
                {' '}
                Select theme{' '}
            </Divider>
            <Select
                showSearch
                size='large'
                style={{ width: '100%' }}
                onChange={handleThemChange}
                defaultValue='dark'
                className='my-1'
                autoFocus
                value={theme}
            >
                {defaultThemes.map((theme) => (
                    <Option value={theme} key={theme}>
                        {theme}
                    </Option>
                ))}

                {monacoThemes
                    .filter((theme) => !theme.includes(' '))
                    .map((theme) => (
                        <Option value={theme} key={theme}>
                            {theme}
                        </Option>
                    ))}
            </Select>
        </>
    );
};

export default ThemeSelector;
