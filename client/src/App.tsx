import Axios from 'axios';
import CodeEditor from 'components/CodeEditor';
import Navbar from 'components/Navbar';
import OutputField from 'components/OutputField';
import React from 'react';
import SplitPane from 'react-split-pane';
import './styles/global.css';
import { initialVal } from 'utils/template';
import CodeState from '_context/code/code.state';

const App: React.FC = () => {
    const width = window.innerHeight / 0.8;

    const [code, setCode] = React.useState(initialVal);
    const [loading, setLoading] = React.useState(false);

    const handleChange = (ev: Object, code: string) => {
        setCode((prevC) => ({ ...prevC, text: code }));
    };

    return (
        <>
            <CodeState>
                <Navbar code={code.text}  />

                <SplitPane
                    split='vertical'
                    defaultSize={width}
                    minSize={width}
                    maxSize={width}
                >
                    <CodeEditor code={code.text} handleChange={handleChange} />
                    <OutputField />
                </SplitPane>
            </CodeState>
        </>
    );
};

export default App;
