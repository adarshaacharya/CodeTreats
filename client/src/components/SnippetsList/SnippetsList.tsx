import React from 'react';
import CodeContext from '_context/code/code.context';
import SnippetItem from './SnippetItem';
import './snippets-list.style.css';

const SnippetsList = () => {
    const codeContext = React.useContext(CodeContext);
    const { snippets, fetchSnippets, loading, filtered } = codeContext;
    React.useEffect(() => {
        fetchSnippets();
        // eslint-disable-next-line
    }, []);

    if (loading) return <p>loading...</p>;
    if (!snippets.length) return <p>No snippets found.</p>;

    return (
        <>
            {filtered.length > 0
                ? filtered.map((snippet) => <SnippetItem snippet={snippet} key={snippet._id} />)
                : snippets.map((snippet) => <SnippetItem snippet={snippet} key={snippet._id} />)}
        </>
    );
};

export default SnippetsList;
