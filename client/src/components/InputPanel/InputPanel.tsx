import React from 'react';
import './input-panel.style.css';
import CodeContext from '_context/code/code.context';

const InputPanel = () => {
    const codeContext = React.useContext(CodeContext);
    const { updateInput } = codeContext;
    return (
        <>
            <textarea
                className='input__area'
                placeholder='Enter your input here..'
                onChange={(e) => updateInput(e.target.value)}
            />
        </>
    );
};

export default InputPanel;
