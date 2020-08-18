import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
            <TransitionGroup>
                {filtered.length
                    ? filtered.map((snippet) => (
                          <CSSTransition key={snippet._id} timeout={500} classNames='item'>
                              <SnippetItem snippet={snippet} />
                          </CSSTransition>
                      ))
                    : snippets.map((snippet) => (
                          <CSSTransition key={snippet._id} timeout={500} classNames='item'>
                              <SnippetItem snippet={snippet} />
                          </CSSTransition>
                      ))}
            </TransitionGroup>
        </>
    );
};



export default SnippetsList;
