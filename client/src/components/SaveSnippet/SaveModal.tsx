import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width : '480px'
    },
    overlay: {
        background: 'rgba(0,0,0,0.7)',
    },
};

const SaveModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={customStyles} closeTimeoutMS={200}>
                <h1 className='dark'>Save Snippet</h1>
                <p className='dark'>Modal Body</p>
                <div>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                </div>
            </Modal>

            <button className='save__snippet' type='submit' onClick={() => setIsOpen(true)}>
                Modal Test
            </button>
        </>
    );
};

export default SaveModal;
