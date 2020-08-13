import React from 'react';
import { useParams } from 'react-router-dom';

const SnippetPage: React.FC = () => {
    const { id } = useParams();
    return (
        <>
            <h1>{id}</h1>
        </>
    );
};

export default SnippetPage;
