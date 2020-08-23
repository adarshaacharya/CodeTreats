import { List } from 'antd';
import PaginateSnippets from 'components/PaginateSnippets';
import { Spinner } from 'layout';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CodeContext from '_context/code/code.context';
import SnippetItem from './SnippetItem';

const SnippetsList = () => {
    const codeContext = React.useContext(CodeContext);
    const { snippets, fetchSnippets, loading, filtered } = codeContext;

    // pages state
    const [currentPage, setCurrentPage] = React.useState(1);
    const [snippetsCountPerPage] = React.useState(5);

    React.useEffect(() => {
        fetchSnippets();
        // eslint-disable-next-line
    }, []);

    // Get current snippets
    const indexOfLastSnippet = currentPage * snippetsCountPerPage;
    const indexOfFirstSnippet = indexOfLastSnippet - snippetsCountPerPage;
    const currentSnippets = snippets.slice(indexOfFirstSnippet, indexOfLastSnippet); // snippets of current page

    // change page
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <Spinner />;
    if (!snippets.length) return <p>No snippets found.</p>;

    return (
        <>
            {filtered.length ? (
                <List
                    size='large'
                    itemLayout='horizontal'
                    dataSource={filtered}
                    renderItem={(snippet) => (
                        <TransitionGroup>
                            <CSSTransition timeout={500} classNames='item' key={snippet._id}>
                                <SnippetItem snippet={snippet} />
                            </CSSTransition>
                        </TransitionGroup>
                    )}
                />
            ) : (
                <List
                    size='large'
                    itemLayout='horizontal'
                    dataSource={currentSnippets}
                    renderItem={(snippet) => <SnippetItem snippet={snippet} />}
                />
            )}

            <PaginateSnippets handlePageChange={handlePageChange} currentPage={currentPage} />
        </>
    );
};

export default SnippetsList;
