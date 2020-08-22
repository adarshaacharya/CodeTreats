import { List } from 'antd';
import PaginateSnippets from 'components/PaginateSnippets';
import { Spinner } from 'layout';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import CodeContext from '_context/code/code.context';
import SnippetItem from './SnippetItem';
import './style.css';

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
                <TransitionGroup>
                    <List
                        size='large'
                        itemLayout='horizontal'
                        dataSource={filtered}
                        renderItem={(snippet) => <SnippetItem snippet={snippet} />}
                    />
                </TransitionGroup>
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
