import { CaretRightOutlined,  } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import CodeContext from '_context/code/code.context';

const RunCode = () => {
    const codeContext = React.useContext(CodeContext);
    const { code, input, loading, submitCode, language } = codeContext;
    const onCodeSubmit = (code: string, language: string, input: string) => {
        submitCode(code, language, input);
    };

    return (
        <Button
            size='large'
            type='primary'
            icon={<CaretRightOutlined />}
            onClick={() => onCodeSubmit(code!, language, input!)} // since we have place input as string or null
            disabled={loading}
        >
            Run Code
        </Button>
    );
};

export default RunCode;
