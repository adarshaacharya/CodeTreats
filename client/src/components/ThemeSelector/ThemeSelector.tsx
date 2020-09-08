import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Divider, Select, Tooltip } from 'antd';
import { defaultThemes, monacoThemes } from 'config/editor/themes';
import React from 'react';
import { defineTheme } from 'utils/define-theme';
import ThemeContext from '_context/theme/theme.context';

const { Option } = Select;
const ThemeSelector = () => {
    const { theme, updateTheme } = React.useContext(ThemeContext);

    const handleThemeChange = (theme: string) => {
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
                Select theme &nbsp;
                <Tooltip title='Effect will be seen only in your room.'>
                    <ExclamationCircleOutlined />
                </Tooltip>
            </Divider>
            <Select
                showSearch
                size='large'
                style={{ width: '100%' }}
                onChange={handleThemeChange}
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
