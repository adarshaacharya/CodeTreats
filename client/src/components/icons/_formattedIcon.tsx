import React from 'react';
import { IconJavascript, IconPython, IconTypescript } from 'components/icons';

type Props = {
    name: string;
};

const FormattedIcon = (props: Props): React.ReactNode => {
    const { name } = props;
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
