import React from 'react';
import { IconJavascript, IconPython, IconTypescript, IconCpp, IconC, IconGo } from 'components/icons';

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

        case 'go':
            return <IconGo />;

        default:
            throw new Error('Unknown icon type: ' + name);
    }
};

export default FormattedIcon;
