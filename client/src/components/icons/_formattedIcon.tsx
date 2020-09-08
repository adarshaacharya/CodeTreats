import React from 'react';
import { IconJavascript, IconPython, IconTypescript, IconCpp } from 'components/icons';
import IconC from './c';

type Props = {
    name: string;
};

const FormattedIcon = (props: Props): JSX.Element => {
    const { name } = props;

    switch (name) {
        case 'javascript':
            return <IconJavascript />;

        case 'typescript':
            return <IconTypescript />;

        case 'python':
            return <IconPython />;

        case 'cpp':
            return <IconCpp />;

        case 'c':
            return <IconC />;

        default:
            throw new Error('Unknown icon type: ' + name);
    }
};

export default FormattedIcon;
