import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SaveModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                closeTimeoutMS={200}
                className='Modal'
                overlayClassName='Overlay'
            >
                <div className='header'>
                    <h3 className='dark'>Enter title for snippet</h3>
                    <button onClick={() => setIsOpen(false)}>❌</button>
                </div>
                <p className='dark body'>Modal Body</p>
                <div className='footer'>
                    <button onClick={() => setIsOpen(false)} className='save__button'>
                        Close
                    </button>
                    <button onClick={() => setIsOpen(false)} className='close__button'>
                        Close
                    </button>
                </div>
            </Modal>

            <button className='save__snippet' type='submit' onClick={() => setIsOpen(true)}>
                Modal Test
            </button>
        </>
    );
};

export default SaveModal;
