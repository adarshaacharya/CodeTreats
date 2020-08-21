import { Slide, toast } from 'react-toastify';

const notify = {
    default: (message: string) => {
        toast(message);
    },
    dark: (message: string) => {
        toast.dark(message);
    },
    success: (message: string, time?: number) => {
        toast.success(message, {
            position: 'top-right',
            autoClose: time,
            transition: Slide,
            hideProgressBar: true,
        });
    },
};

export { notify };
