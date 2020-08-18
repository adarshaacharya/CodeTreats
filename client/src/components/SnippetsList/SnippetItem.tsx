import { FormattedIcon } from 'components/icons';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { ISnippet } from '_context/code/code.type';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type Props = {
    snippet: ISnippet;
};

const SnippetItem: React.FC<Props> = ({ snippet }) => {
    const { _id, title, language, date } = snippet;
    return (
        <>
            <div className='snippet__item'>
                <Link to={`${_id}`}>{ title}</Link>
                {' '}
                <h4>
                    <FormattedIcon name={language} />
                    <Moment fromNow>{date}</Moment>
                </h4>
                <hr />
            </div>
        </>
    );
};

export default SnippetItem;
