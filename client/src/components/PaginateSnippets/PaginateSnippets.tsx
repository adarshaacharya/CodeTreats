import { Pagination } from 'antd';
import React from 'react';
import { useSnippetContext } from '_context/snippet/snippet.context';

type Props = {
    handlePageChange: (pageNumber: number) => void;
    currentPage: number;
};

const PaginateSnippets: React.FC<Props> = ({ handlePageChange, currentPage }) => {
    const { snippets } = useSnippetContext();

    const TOTAL_COUNT = snippets.length;

    return (
        <>
            <div className='center mt-2'>
                <Pagination
                    onChange={handlePageChange}
                    defaultCurrent={1}
                    current={currentPage}
                    total={TOTAL_COUNT}
                    pageSize={5}
                />
            </div>
        </>
    );
};

export default PaginateSnippets;
