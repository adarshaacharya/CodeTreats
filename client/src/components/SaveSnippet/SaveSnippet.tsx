import React from 'react';
import CodeContext from '_context/code/code.context';
import './style.css';
import useForm from 'hooks/use-form';

const SaveSnippet = () => {
    const codeContext = React.useContext(CodeContext);
    const { addSnippet, code, language } = codeContext;

    const initialVal = {
        title: '',
    };

    const [formData, handleInput] = useForm(initialVal);

    const { title } = formData;
    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addSnippet({
            title: title!,
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
                onChange={handleInput}
            />

            <button className='save__snippet' type='submit'>
                Save Snippet
            </button>
        </form>
    );
};

export default SaveSnippet;
