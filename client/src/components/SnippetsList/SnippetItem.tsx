import { List } from 'antd';
import { FormattedIcon } from 'components/icons';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { ISnippet } from '_context/code/code.type';
type Props = {
    snippet: ISnippet;
};

const SnippetItem: React.FC<Props> = ({ snippet }) => {
    const { _id, title, language, date } = snippet;

    return (
        <>
            <List.Item className='snippet__item'>
                <List.Item.Meta
                    avatar={<FormattedIcon name={language} />}
                    title={
                        <Link to={`/snippets/${_id}`}>
                            {' '}
                            <h2>{title}</h2>
                        </Link>
                    }
                    description={<Moment fromNow>{date}</Moment>}
                />
            </List.Item>
        </>
    );
};

export default SnippetItem;
{
    /* <CopyLinkButton id={_id!} /> */
}
