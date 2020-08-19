import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CodeContext from '_context/code/code.context';
import SnippetItem from './SnippetItem';
import './snippets-list.style.css';
import PaginateSnippets from 'components/PaginateSnippets';

const SnippetsList = () => {
    const codeContext = React.useContext(CodeContext);
    const { snippets, fetchSnippets, loading, filtered } = codeContext;

    const [currentPage, setCurrentPage] = React.useState(1);
    const [snippetsCountPerPage] = React.useState(5);

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
    const currentSnippets = snippets.slice(indexOfFirstSnippet, indexOfLastSnippet); // snippets of current page

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
            <PaginateSnippets handlePageChange={handlePageChange} currentPage={currentPage} />
        </>
    );
};

export default SnippetsList;
