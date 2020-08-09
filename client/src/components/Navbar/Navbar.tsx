import { ReactComponent as Icon } from 'images/run-button.svg';
import React from 'react';
import CodeContext from '_context/code/code.context';
import './navbar.style.css';

type Props = {
    handleSubmit: (code: string) => void;
    code: string;
    loading: boolean;
};

const Navbar: React.FC<Props> = ({ handleSubmit, code, loading }) => {
    const codeContext = React.useContext(CodeContext);

    const { submitCode, } = codeContext;
    const handleCodeSubmit = (code : string) => {
        submitCode(code);
    };
    return (
        <nav>
            <ul>
                <button
                    className='submit'
                    onClick={() => handleCodeSubmit(code)}
                    disabled={loading}
                >
                    Run <Icon className='run' />
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
