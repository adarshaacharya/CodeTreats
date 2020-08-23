import { Pagination } from 'antd';
import React from 'react';
import CodeContext from '_context/code/code.context';

type Props = {
    handlePageChange: (pageNumber: number) => void;
    currentPage: number;
};

const PaginateSnippets: React.FC<Props> = ({ handlePageChange, currentPage }) => {
    const codeContext = React.useContext(CodeContext);
    const { snippets } = codeContext;

    const TOTAL_COUNT = snippets.length;

    return (
        <>
            <div className='center mt-2'>
                <Pagination
                    onChange={handlePageChange}
                    defaultCurrent={1}
                    current={currentPage}
                    total={TOTAL_COUNT}
                    showSizeChanger={false}
                />
            </div>
        </>
    );
};

export default PaginateSnippets;
