import { toast, Slide } from 'react-toastify';

export const notify = {
    default: (message: string) => {
        toast(message);
    },
    success: (message: string, time?: number) => {
        toast.success(message, {
            position: 'top-center',
            autoClose: time,
            transition: Slide,
            hideProgressBar: true,
            
        });
    },
};
