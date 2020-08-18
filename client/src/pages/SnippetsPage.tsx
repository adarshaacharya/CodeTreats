import React from 'react';
import SnippetsList from 'components/SnippetsList';
import SearchBar from 'components/SearchBar';

const SnippetsPage = () => {
    return (
        <>
            <SearchBar />
            <SnippetsList />
        </>
    );
};

export default SnippetsPage;
