import React from 'react';
import { stdout } from 'process';

type Props = {
    output: any;
    loading: boolean;
};

const OutputField: React.FC<Props> = ({ output, loading }) => {
    if (loading) return <textarea disabled value='Running...' />;
    if (output?.stdout)
        return <textarea className='error' value={output.stdout} disabled />;
    if (output?.stderr)
        return <textarea className='error' value={output.stderr} />;

    return <textarea disabled></textarea>;
};

export default OutputField;

// {stdout: "hello world↵", stderr: "", error: ""}
// error: ""
// stderr: ""
// stdout: "hello world↵"
// __proto__: Object
