import { ReactComponent as Icon } from 'images/run-button.svg';
import React from 'react';
import CodeContext from '_context/code/code.context';

const RunCodeButton = () => {
    const codeContext = React.useContext(CodeContext);
    const { code, input, loading, submitCode, language } = codeContext;
    console.log(input);
    const onCodeSubmit = (code: string, language: string, input: string) => {
        submitCode(code, language, input);
    };
    return (
        <button
            className='submit'
            onClick={() => onCodeSubmit(code!, language, input!)} // since we have place input as string or null
            disabled={loading}
        >
            Run <Icon className='run' />
        </button>
    );
};

export default RunCodeButton;
