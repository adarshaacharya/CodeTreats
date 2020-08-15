import React from 'react';
import CodeContext from '_context/code/code.context';
import './style.css';

const SaveSnippet = () => {
    const codeContext = React.useContext(CodeContext);
    const { addSnippet, code, language } = codeContext;

    const initialVal = {
        title: '',
    };

    const [snippet, setSnippet] = React.useState(initialVal);

    const { title } = snippet;
    const onFormChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSnippet({ ...snippet, [e.currentTarget.name]: e.currentTarget.value });
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addSnippet({
            title,
            sourceCode: code,
            language,
        });
    };
    return (
        <form onSubmit={onFormSubmit} autoComplete='off'>
            <input
                type='text'
                name='title'
                id='title'
                placeholder='Type snippet title..'
                value={title}
                onChange={onFormChange}
            />

            <button className='save__snippet' type='submit'>
                Save Snippet
            </button>
        </form>
    );
};

export default SaveSnippet;
