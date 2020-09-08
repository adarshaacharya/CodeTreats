import React from 'react';
import { IconJavascript, IconPython, IconTypescript, IconCpp, IconC, IconGo, IconJava } from 'components/icons';

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

        case 'java':
            return <IconJava />;

        default:
            throw new Error('Unknown icon type: ' + name);
    }
};

export default FormattedIcon;
