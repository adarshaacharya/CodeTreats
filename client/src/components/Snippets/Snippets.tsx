import React from 'react';
import { Link } from 'react-router-dom';
import CodeContext from '_context/code/code.context';

const Snippets = () => {
    const codeContext = React.useContext(CodeContext);
    const { snippets, fetchSnippets, loading } = codeContext;
    React.useEffect(() => {
        fetchSnippets();
    }, []);

    if (loading) return <p>loading...</p>;
    if (snippets.length < 1) return <p>No snippets found.</p>;
    return (
        <>
            {snippets.map((snippet) => (
                <Link key={snippet._id} to={`/snippets/${snippet._id}`}>
                    <h4>{snippet.title}</h4>
                </Link>
            ))}
        </>
    );
};

export default Snippets;
