import useForm from 'hooks/use-form';
import { useSfx } from 'hooks/use-sfx';
import { notify } from 'layout';
import React from 'react';
import CodeContext from '_context/code/code.context';
import './save-snippet.style.css';
import Modal from 'react-modal';
import useModal from 'hooks/use-modal';
import { title } from 'process';

Modal.setAppElement('#root');

const SaveSnippet: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { addSnippet, code, language } = codeContext;

    const { playTing } = useSfx();
    const { openModal, closeModal, modalIsOpen } = useModal(false);

    const initialVal = { title: '' };
    const [formData, handleInput] = useForm(initialVal);

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.title === '') return;
        
        addSnippet({
            title: formData.title!,
            sourceCode: code,
            language,
        });
        playTing();
        notify.dark('Code has been saved successfully 😎');
    };

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={true}
                closeTimeoutMS={200}
                contentLabel='Save New Snippet'
                className='Modal'
                overlayClassName='Overlay'
            >
                <div className='header'>
                    <p className='dark'>Enter meaningful title for snippet.</p>
                    <button onClick={closeModal}>❌</button>
                </div>

                <hr />

                <div className='body'>
                    <form onSubmit={onFormSubmit} autoComplete='off'>
                        <input
                            type='text'
                            name='title'
                            id='title'
                            placeholder='Type snippet title..'
                            value={formData.title}
                            onChange={handleInput}
                            required={true}
                        />
                    </form>
                </div>

                <hr />
                <div className='footer'>
                    <button className='save__button' type='submit' onClick={onFormSubmit}>
                        Save
                    </button>
                    <button onClick={closeModal} className='close__button'>
                        Close
                    </button>
                </div>
            </Modal>

            <button className='save__snippet' onClick={openModal}>
                Save Snippet
            </button>
        </>
    );
};

export default SaveSnippet;
