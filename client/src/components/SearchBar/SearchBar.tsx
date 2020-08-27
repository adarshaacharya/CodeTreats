import { Input } from 'antd';
import React from 'react';
import escapeRegExp from 'utils/escape-regExp';
import SnippetContext from '_context/snippet/snippet.context';

const SearchBar = () => {
    const { filterSnippets, clearFilter } = React.useContext(SnippetContext);

    const onSnippetSearch = (val: string) => {
        // checks if any value exists on box
        if (val) {
            const escapedString = escapeRegExp(val);
            filterSnippets(escapedString);
        } else {
            //slow clear filter so that component doesn't unmount before filtered state is []
            setTimeout(() => {
                clearFilter();
            }, 500);
        }
    };

    return (
        <>
            <div className='center mb-2'>
                <Input.Search
                    placeholder='Search snippets'
                    onSearch={(value) => onSnippetSearch(value)}
                    onPressEnter={(e) => onSnippetSearch(e.currentTarget?.value)}
                    onChange={(e) => onSnippetSearch(e.currentTarget?.value)}
                    size='large'
                    enterButton
                    style={{ width: 600 }}
                />
            </div>
        </>
    );
};

export default SearchBar;
