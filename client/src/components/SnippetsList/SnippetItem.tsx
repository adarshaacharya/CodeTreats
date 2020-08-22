import { FormattedIcon } from 'components/icons';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { ISnippet } from '_context/code/code.type';
import CopyLinkButton from './CopyLinkButton';
import styles from './style.module.css';


type Props = {
    snippet: ISnippet;
};

const SnippetItem: React.FC<Props> = ({ snippet }) => {
    const { _id, title, language, date } = snippet;

    return (
        <>
            <div className={styles.item}>
                <FormattedIcon name={language} />
                <Link to={`/snippets/${_id}`}>{title}</Link> <Moment fromNow>{date}</Moment>
                <CopyLinkButton id={_id!}  />
            </div>
            <hr />
        </>
    );
};

export default SnippetItem;
