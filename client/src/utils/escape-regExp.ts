// one line library to parse escape character in searchbar

const escapeRegExp = (str: string) => {
    //eslint-disable-next-line
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

export default escapeRegExp;
