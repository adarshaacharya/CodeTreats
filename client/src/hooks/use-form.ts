import React from 'react';

type Props = {
    title?: string;
};

type TReturn = [Props, (event: React.FormEvent<HTMLInputElement>) => void];

const useForm = (initialVal: Props): TReturn => {
    const [formData, setFormData] = React.useState(initialVal || {});

    const handleInput = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }, []);

    return [formData, handleInput];
};

export default useForm;
