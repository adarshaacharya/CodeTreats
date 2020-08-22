import { Button } from 'antd';
import useForm from 'hooks/use-form';
import useModal from 'hooks/use-modal';
import { useSfx } from 'hooks/use-sfx';
import { notify } from 'layout';
import React from 'react';
import Modal from 'react-modal';
import CodeContext from '_context/code/code.context';
import './save-snippet.style.css';



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
        // if (formData.title === '') return;

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
                            required={true}
                            value={formData.title}
                            onChange={handleInput}
                        />
                    </form>
                </div>

                <hr />
                <div className='footer'>
                    <Button type='primary' onClick={onFormSubmit}>
                        Save
                    </Button>
                    <Button danger onClick={closeModal} className='close__button'>
                        Close
                    </Button>
                </div>
            </Modal>

            <Button type='primary' size='large'  onClick={openModal} className="m-1">
                Save Snippet
            </Button>
            
        </>
    );
};

export default SaveSnippet;
