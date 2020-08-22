import SearchBar from 'components/SearchBar';
import SnippetsList from 'components/SnippetsList';
import React from 'react';

const SnippetsPage = () => {
    return (
        <>
            <div className='container'>
                <SearchBar />
                <SnippetsList />
            </div>
        </>
    );
};

export default SnippetsPage;
