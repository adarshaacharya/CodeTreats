import { List } from 'antd';
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
            <List.Item className={styles.item}>
                <List.Item.Meta
                    avatar={<FormattedIcon name={language} />}
                    title={
                        <Link to={`/snippets/${_id}`}>
                            {' '}
                            <h2>{title}</h2>
                        </Link>
                    }
                />
                <Moment fromNow>{date}</Moment>
                <CopyLinkButton id={`http://localhost:3000/snippets/${_id}`} />
            </List.Item>
        </>
    );
};

export default SnippetItem;
{
    /* <CopyLinkButton id={_id!} /> */
}
