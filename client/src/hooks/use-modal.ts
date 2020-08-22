import React from 'react';

type useModalReturn = {
    showModal: () => void;
    closeModal: () => void;
    visible: boolean;
    setVisible: (val: boolean) => void;
};

const useModal = (defaultOpen: boolean): useModalReturn => {
    const [visible, setVisible] = React.useState<boolean>(defaultOpen);

    const showModal = () => setVisible(true);

    const closeModal = () => setVisible(false);

    return { showModal, closeModal, visible, setVisible };
};

export default useModal;
