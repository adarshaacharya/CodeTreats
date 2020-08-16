import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SaveModal = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const handleClose = () => setModalIsOpen(false);
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleClose}
                closeTimeoutMS={200}
                className='Modal'
                overlayClassName='Overlay'
            >
                <div className='header'>
                    <h3 className='dark'>Enter title for snippet</h3>
                    <button onClick={handleClose}>❌</button>
                </div>
                <p className='dark body'>Modal Body</p>
                <div className='footer'>
                    <button onClick={handleClose} className='save__button'>
                        Save
                    </button>
                    <button onClick={handleClose} className='close__button'>
                        Close
                    </button>
                </div>
            </Modal>

            <button className='save__snippet' type='submit' onClick={() => setModalIsOpen(true)}>
                Modal Test
            </button>
        </>
    );
};

export default SaveModal;
