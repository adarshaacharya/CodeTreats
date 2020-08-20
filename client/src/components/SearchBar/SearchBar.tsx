import React, { FormEvent } from 'react';
import CodeContext from '_context/code/code.context';

const SearchBar = () => {
    const codeContext = React.useContext(CodeContext);
    const { filterSnippets, clearFilter } = codeContext;
    const valueRef = React.useRef<HTMLInputElement>(null!); // set valueRef.curent property to null

    const onFormChange = (event: FormEvent<HTMLInputElement>) => {
        // checks if any value exists on box
        if (valueRef.current.value) {
            filterSnippets(event.currentTarget.value);
        } else {
            clearFilter();
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
