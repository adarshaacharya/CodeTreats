import React from 'react';
import { stdout } from 'process';

type Props = {
    output: any;
};

const OutputField: React.FC<Props> = ({ output }) => {
    if (output?.stdout) return <div>{output.stdout}</div>;
    return <>Output Field</>;
};

export default OutputField;

// {stdout: "hello world↵", stderr: "", error: ""}
// error: ""
// stderr: ""
// stdout: "hello world↵"
// __proto__: Object
