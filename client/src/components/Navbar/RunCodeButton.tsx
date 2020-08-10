import { ReactComponent as Icon } from 'images/run-button.svg';
import React from 'react';
import CodeContext from '_context/code/code.context';

const RunCodeButton = () => {
    const codeContext = React.useContext(CodeContext);
    const { code, loading, submitCode, language } = codeContext;

    const onCodeSubmit = (code: string, language: string) => {
        submitCode(code, language);
    };
    return (
        <button
            className='submit'
            onClick={() => onCodeSubmit(code!, language)}
            disabled={loading}
        >
            Run <Icon className='run' />
        </button>
    );
};

export default RunCodeButton;
