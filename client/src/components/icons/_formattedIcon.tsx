import React from 'react';
import { IconJavascript, IconPython, IconTypescript } from 'components/icons';

type IconProps = {
    name: string;
};

const FormattedIcon: React.FC<IconProps> = ({ name }) => {
    switch (name) {
        case 'javascript':
            return <IconJavascript />;

        case 'typescript':
            return <IconTypescript />;

        case 'python':
            return <IconPython />;
    }
};

export default FormattedIcon;
