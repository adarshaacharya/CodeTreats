import React from 'react';
import { useParams } from 'react-router-dom';

const Snippet = () => {
    const { id } = useParams();

        React.useEffect(() => {
        return () => {
        }
    }, [])
    return (
        <div>
            {id}
            Snippet
        </div>
    );
};

export default Snippet;
