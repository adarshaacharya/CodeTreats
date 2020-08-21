import React, { FormEvent } from 'react';
import escapeRegExp from 'utils/escape-regExp';
import CodeContext from '_context/code/code.context';

const SearchBar = () => {
    const codeContext = React.useContext(CodeContext);
    const { filterSnippets, clearFilter } = codeContext;
    const valueRef = React.useRef<HTMLInputElement>(null!); // set valueRef.curent property to null

    const onFormChange = (event: FormEvent<HTMLInputElement>) => {
        // checks if any value exists on box
        if (valueRef.current.value) {
            const escapedString = escapeRegExp(event.currentTarget.value);
            filterSnippets(escapedString);
        } else {
            // slow clear filter so that component doesn't unmount before filtered state is []
            setTimeout(() => {
                clearFilter();
            }, 500);
        }
    };

    return (
        <>
            <form>
                <input ref={valueRef} type='text' placeholder='Search Snippets...' onChange={onFormChange} />
            </form>
        </>
    );
};

export default SearchBar;
