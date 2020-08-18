import { FormattedIcon } from 'components/icons';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { ISnippet } from '_context/code/code.type';

type Props = {
    snippet: ISnippet;
};

const SnippetItem: React.FC<Props> = ({ snippet }) => {
    return (
        <>
            <Link to={`/snippets/${snippet._id}`} className='snippet__item'>
                <h4>
                    <FormattedIcon name={snippet.language} />
                    {snippet.title} &rarr;
                    <Moment fromNow>{snippet.date}</Moment>
                </h4>
                <hr />
            </Link>
        </>
    );
};

export default SnippetItem;
