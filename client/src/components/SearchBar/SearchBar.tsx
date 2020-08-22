import { Input } from 'antd';
import React from 'react';
import escapeRegExp from 'utils/escape-regExp';
import CodeContext from '_context/code/code.context';

const SearchBar = () => {
    const codeContext = React.useContext(CodeContext);
    const { filterSnippets, clearFilter } = codeContext;

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
            <div className='center'>
                <Input.Search
                    placeholder='Search snippets'
                    onSearch={(value) => onSnippetSearch(value)}
                    onPressEnter={(e) => onSnippetSearch(e.currentTarget?.value)}
                    onChange={(e) => onSnippetSearch(e.currentTarget?.value)}
                    size='large'
                    enterButton
                    style={{ width: 700 }}
                />
            </div>
        </>
    );
};

export default SearchBar;
