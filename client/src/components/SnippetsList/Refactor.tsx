import { List } from 'antd';
import { FormattedIcon } from 'components/icons';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { ISnippet } from '_context/code/code.type';

type Props = {
    snippets: ISnippet[];
};
const Refactor: React.FC<Props> = ({ snippets }) => {
    return (
        <>
            <List
                size='large'
                itemLayout='horizontal'
                dataSource={snippets}
                renderItem={(snippet) => (
                    <List.Item className='snippet__item'>
                        <List.Item.Meta
                            avatar={<FormattedIcon name={snippet.language} />}
                            title={
                                <Link to={`/snippets/${snippet._id}`}>
                                    {' '}
                                    <h2>{snippet.title}</h2>
                                </Link>
                            }
                            description={<Moment fromNow>{snippet.date}</Moment>}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default Refactor;
