import useForm from 'hooks/use-form';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CodeContext from '_context/code/code.context';
import './style.css';

const SaveSnippet = () => {
    const codeContext = React.useContext(CodeContext);
    const { addSnippet, code, language } = codeContext;

    const initialVal = { title: '' };
    const [formData, handleInput] = useForm(initialVal);

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addSnippet({
            title: formData.title!,
            sourceCode: code,
            language,
        });
    };

    const notify = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    return (
        <>
            <ToastContainer />
            <form onSubmit={onFormSubmit} autoComplete='off'>
                <input
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Type snippet title..'
                    value={formData.title}
                    onChange={handleInput}
                    required
                />

                <button className='save__snippet' type='submit' onClick={notify}>
                    Save Snippet
                </button>
            </form>
        </>
    );
};

export default SaveSnippet;
