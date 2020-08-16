import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import CodeContext from '_context/code/code.context';
import './snippets-list.style.css';
import { FormattedIcon } from 'components/icons';

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
                <Link key={snippet._id} to={`/snippets/${snippet._id}`} className='snippet__item'>
                    <h4>
                        <FormattedIcon name={snippet.language} />
                        {snippet.title} &rarr;
                        <Moment format='YYY/MM/DD'>{snippet.date}</Moment>
                    </h4>
                    <hr/>
                </Link>
            ))}
        </>
    );
};

export default SnippetsList;
