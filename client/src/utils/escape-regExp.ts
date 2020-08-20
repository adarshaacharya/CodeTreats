// one line library to parse escape character in searchbar

const escapeRegExp = (str: string) => {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

export default escapeRegExp;
