import PaginateSnippets from 'components/PaginateSnippets';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CodeContext from '_context/code/code.context';
import SnippetItem from './SnippetItem';
import './snippets-list.style.css';

const SnippetsList = () => {
    const codeContext = React.useContext(CodeContext);
    const { snippets, fetchSnippets, loading, filtered } = codeContext;

    // pages state
    const [currentPage, setCurrentPage] = React.useState(1);
    const [snippetsCountPerPage] = React.useState(5);

    React.useEffect(() => {
        fetchSnippets();
    }, []);

    // Get current snippets
    const indexOfLastSnippet = currentPage * snippetsCountPerPage;
    const indexOfFirstSnippet = indexOfLastSnippet - snippetsCountPerPage;
    const currentSnippets = snippets.slice(indexOfFirstSnippet, indexOfLastSnippet); // snippets of current page

    // change page
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <p>loading...</p>;
    if (!snippets.length) return <p>No snippets found.</p>;

    return (
        <>
            {filtered.length ? (  
                <TransitionGroup>
                    {filtered.map((snippet) => (
                        <CSSTransition timeout={500} classNames='item' key={snippet._id}>
                            <SnippetItem snippet={snippet} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            ) : (
                currentSnippets.map((snippet) => <SnippetItem snippet={snippet} key={snippet._id} />)
            )}

            <PaginateSnippets handlePageChange={handlePageChange} currentPage={currentPage} />
        </>
    );
};

export default SnippetsList;
