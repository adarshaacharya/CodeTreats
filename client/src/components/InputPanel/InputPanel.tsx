import React from 'react';
import CodeContext from '_context/code/code.context';
import './input-panel.style.css';

const InputPanel = () => {
    const codeContext = React.useContext(CodeContext);
    const { updateInput } = codeContext;
    return (
        <>
            <textarea
                placeholder='Enter your input here..'
                onChange={(e) => updateInput(e.target.value)}
            />
        </>
    );
};

export default InputPanel;
