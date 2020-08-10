import React from 'react';
import './input-panel.style.css';
import CodeContext from '_context/code/code.context';

const InputPanel = () => {
    const codeContext = React.useContext(CodeContext);
    const { input } = codeContext;
    return (
        <>
            <textarea
                className='input__area'
                placeholder='Enter your input here..'
            />
        </>
    );
};

export default InputPanel;
