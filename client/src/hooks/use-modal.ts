import React from 'react';

type useModalReturn = {
    openModal: () => void;
    closeModal: () => void;
    modalIsOpen: boolean;
};

const useModal = (defaultOpen: boolean): useModalReturn => {
    const [modalIsOpen, setIsOpen] = React.useState<boolean>(defaultOpen);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    return { openModal, closeModal, modalIsOpen };
};

export default useModal;
