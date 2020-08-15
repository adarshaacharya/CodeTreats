import React from 'react';

const useForm = () => {
    const [formData, setFormData] = React.useState({});

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    return [handleInput, formData];
};

export default useForm;
