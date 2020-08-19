import React from 'react';
import Pagination from 'react-js-pagination';
import CodeContext from '_context/code/code.context';

type Props = {
    handlePageChange: (pageNumber: number) => void;
    currentPage: number;
};

const Paginate: React.FC<Props> = ({ handlePageChange, currentPage }) => {
    const codeContext = React.useContext(CodeContext);
    const { snippets } = codeContext;

    const TOTAL_COUNT = snippets.length;
    const PAGE_RANGE = 5;

    return (
        <Pagination
            prevPageText='prev'
            nextPageText='next'
            firstPageText='first'
            lastPageText='last'
            activePage={currentPage}
            totalItemsCount={TOTAL_COUNT}
            pageRangeDisplayed={PAGE_RANGE}
            onChange={handlePageChange}
        />
    );
};

export default Paginate;
