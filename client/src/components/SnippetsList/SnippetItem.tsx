import { FormattedIcon } from 'components/icons';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { ISnippet } from '_context/code/code.type';
import CopyLinkButton from './CopyLinkButton';

type Props = {
    snippet: ISnippet;
};

const SnippetItem: React.FC<Props> = ({ snippet }) => {
    const { _id, title, language, date } = snippet;

    return (
        <>
            <CSSTransition key={snippet._id} timeout={500} classNames='item'>
                <div className='snippet__item' >
                    <FormattedIcon name={language} />
                    <Link to={`/snippets/${_id}`}>{title}</Link> <Moment fromNow>{date}</Moment>
                    <CopyLinkButton id={_id!} />
                </div>
            </CSSTransition>
            <hr />
        </>
    );
};

export default SnippetItem;
