import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import CodeContext from '_context/code/code.context';

const Snippets = () => {
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
                <Link key={snippet._id} to={`/snippets/${snippet._id}`}>
                    <h4>
                        {snippet.title} &rarr;
                        <Moment format='YYY/MM/DD'>{snippet.date}</Moment>
                    </h4>
                </Link>
            ))}
        </>
    );
};

export default Snippets;
