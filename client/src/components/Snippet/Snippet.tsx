import React from 'react';
import { useParams } from 'react-router-dom';
import CodeContext from '_context/code/code.context';

const Snippet = () => {
    const { id } = useParams();
    const codeContext = React.useContext(CodeContext);
    const { fetchSnippetbyId, code, language, loading } = codeContext;

    React.useEffect(() => {
        console.log('side effect');
        fetchSnippetbyId(id);
    }, [id]);

    if (loading || !code || !language) return <p>Loading..</p>;

    return (
        <div>
            {id} { code } { language}
        </div>
    );
};

export default Snippet;
