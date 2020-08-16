import useForm from 'hooks/use-form';
import React from 'react';
import { toast } from 'react-toastify';
import CodeContext from '_context/code/code.context';
import './save-snippet.style.css';
import { useSfx } from 'hooks/use-sfx';
import SaveModal from './SaveModal';
import { notify } from 'layout/Toast';

const SaveSnippet: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { addSnippet, code, language } = codeContext;

    const { playTing } = useSfx();

    const initialVal = { title: '' };
    const [formData, handleInput] = useForm(initialVal);

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addSnippet({
            title: formData.title!,
            sourceCode: code,
            language,
        });
        playTing();
        notify.default('Code has been saved successfully 😎');
    };

    return (
        <>
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

                <button className='save__snippet' type='submit'>
                    Save Snippet
                </button>
            </form>

            <SaveModal />
        </>
    );
};

export default SaveSnippet;
