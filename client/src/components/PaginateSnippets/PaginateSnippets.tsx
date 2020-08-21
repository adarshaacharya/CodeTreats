import React from 'react';
import Pagination from 'react-js-pagination';
import CodeContext from '_context/code/code.context';

type Props = {
    handlePageChange: (pageNumber: number) => void;
    currentPage: number;
};

const PaginateSnippets: React.FC<Props> = ({ handlePageChange, currentPage }) => {
    const codeContext = React.useContext(CodeContext);
    const { snippets } = codeContext;

    const TOTAL_COUNT = snippets.length;
    const PAGE_RANGE = 5;
    console.log('paginate snippets');
    return (
        <div style={{ padding: '20px' }}>
            <Pagination
                prevPageText='<<<'
                nextPageText='>>>'
                firstPageText='first'
                lastPageText='last'
                activePage={currentPage}
                totalItemsCount={TOTAL_COUNT}
                pageRangeDisplayed={PAGE_RANGE}
                onChange={handlePageChange}
                activeClass='active__page'
            />
        </div>
    );
};

export default PaginateSnippets;
