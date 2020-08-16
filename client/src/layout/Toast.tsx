import { toast } from 'react-toastify';

export const notify = {
    default: (message: string) => {
        toast(message);
    },
};
