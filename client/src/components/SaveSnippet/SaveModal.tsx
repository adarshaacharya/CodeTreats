import React from 'react';
import Modal from 'react-modal';
import useModal from 'hooks/use-modal';

Modal.setAppElement('#root');

const SaveModal = () => {
    const { openModal, closeModal, modalIsOpen } = useModal(false);
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                closeTimeoutMS={200}
                contentLabel='Save New Snippet'
                className='Modal'
                overlayClassName='Overlay'
            >
                <div className='header'>
                    <h3 className='dark'>Enter title for snippet</h3>
                    <button onClick={closeModal}>❌</button>
                </div>
                <p className='dark body'>Modal Body</p>
                <div className='footer'>
                    <button onClick={closeModal} className='save__button'>
                        Save
                    </button>
                    <button onClick={closeModal} className='close__button'>
                        Close
                    </button>
                </div>
            </Modal>

            <button className='save__snippet' type='submit' onClick={openModal}>
                Modal Test
            </button>
        </>
    );
};

export default SaveModal;
