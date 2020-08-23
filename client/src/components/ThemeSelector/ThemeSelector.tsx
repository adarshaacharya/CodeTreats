import { Divider, Select } from 'antd';
import React from 'react';
import { defineTheme } from 'theme';
import { defaultThemes, monacoThemes } from 'utils/themes';
import ThemeContext from '_context/theme/theme.context';

const { Option, OptGroup } = Select;
const ThemeSelector = () => {
    const themeContext = React.useContext(ThemeContext);
    const { theme, updateTheme } = themeContext;

    function handleThemChange(theme: string) {
        console.log(theme);

        if (defaultThemes.includes(theme)) {
            updateTheme(theme);
        } else {
            defineTheme(theme).then((_) => updateTheme(theme));
        }
    }

    return (
        <>
            <Divider orientation='left'> Select theme </Divider>
            <Select
                size='large'
                style={{ width: '100%' }}
                onChange={handleThemChange}
                defaultValue='dark'
                className='my-1'
                autoFocus
                value={theme}
            >
                <OptGroup label='Defaults'>
                    {defaultThemes.map((theme) => (
                        <Option value={theme} key={theme}>
                            {theme}
                        </Option>
                    ))}
                </OptGroup>

                <OptGroup label='Others'>
                    {monacoThemes
                        .filter((theme) => !theme.includes(' '))
                        .map((theme) => (
                            <Option value={theme} key={theme}>
                                {theme}
                            </Option>
                        ))}
                </OptGroup>
            </Select>
        </>
    );
};

export default ThemeSelector;
