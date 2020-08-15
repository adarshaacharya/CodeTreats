import React from 'react';


const useForm = (initialVal: {}) => {
    const [formData, setFormData] = React.useState(initialVal);

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    return [handleInput, formData];
};

export default useForm;
