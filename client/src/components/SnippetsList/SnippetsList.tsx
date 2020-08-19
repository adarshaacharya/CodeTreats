import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CodeContext from '_context/code/code.context';
import Paginate from './Paginate';
import SnippetItem from './SnippetItem';
import './snippets-list.style.css';

const SnippetsList = () => {
    const codeContext = React.useContext(CodeContext);
    const { snippets, fetchSnippets, loading, filtered } = codeContext;

    const [currentPage, setCurrentPage] = React.useState(1);
    const [snippetsCountPerPage] = React.useState(8);

    React.useEffect(() => {
        fetchSnippets();
        // eslint-disable-next-line
    }, []);

    if (loading) return <p>loading...</p>;
    if (!snippets.length) return <p>No snippets found.</p>;

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastSnippet = currentPage * snippetsCountPerPage;
    const indexOfFirstSnippet = indexOfLastSnippet - snippetsCountPerPage;
    const currentSnippets = snippets.slice(indexOfFirstSnippet, indexOfLastSnippet);

    return (
        <>
            <TransitionGroup>
                {filtered.length
                    ? filtered.map((snippet) => (
                          <CSSTransition key={snippet._id} timeout={500} classNames='item'>
                              <SnippetItem snippet={snippet} />
                          </CSSTransition>
                      ))
                    : currentSnippets.map((snippet) => (
                          <CSSTransition key={snippet._id} timeout={500} classNames='item'>
                              <SnippetItem snippet={snippet} />
                          </CSSTransition>
                      ))}
            </TransitionGroup>
            <Paginate handlePageChange={handlePageChange} currentPage={currentPage} />
        </>
    );
};

export default SnippetsList;
