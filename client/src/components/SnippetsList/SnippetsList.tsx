import React from 'react';
import CodeContext from '_context/code/code.context';
import SnippetItem from './SnippetItem';
import './snippets-list.style.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
            <TransitionGroup>
                {snippets.map((snippet) => (
                    <CSSTransition key={snippet._id} timeout={500} classNames='item'>
                        <SnippetItem snippet={snippet} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    );
};

export default SnippetsList;
