import React from 'react';
import CodeContext from '_context/code/code.context';
import './snippets-list.style.css';
import SnippetItem from './SnippetItem';

const SnippetsList = () => {
    const codeContext = React.useContext(CodeContext);
    const { snippets, fetchSnippets, loading } = codeContext;
    React.useEffect(() => {
        fetchSnippets();
        // eslint-disable-next-line
    }, []);

    if (loading) return <p>loading...</p>;
    if (snippets.length < 1) return <p>No snippets found.</p>;

    return (
        <>
            {snippets.map((snippet) => (
                <SnippetItem snippet={snippet} />
            ))}
        </>
    );
};

export default SnippetsList;
