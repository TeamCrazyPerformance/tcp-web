import React from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@atoms/Avatar';
import Button from '@atoms/Button';
import Divider from '@atoms/Divider';
import { EyeIcon, CommentIcon } from '@lib/Icons';
import { displayDate } from '~/utils';
import { Profile, Article as IArticle } from '~/types';

export interface ArticleTitleProps {
    article: Omit<IArticle, 'comment' | 'contents'>;
    user: Profile;
}

const AuthorButtons = (props: { articleId: string | number }) => {
    const history = useHistory();
    const handleModify = () => {
        history.push(`/editor/${props.articleId}`);
    };

    return (
        <div className="gnb">
            <Button name={'수정'} className="white" onClick={handleModify} />
            <Button name={'삭제'} className="red" />
        </div>
    );
};

export const ArticleTitle = (props: ArticleTitleProps) => {
    const { article, user } = props;
    const {
        author,
        createdAt,
        updatedAt,
        title,
        commentCount,
        viewCount,
    } = article;

    const dateView = displayDate(updatedAt || createdAt, {
        format: 'YYYY/MM/DD A hh:mm',
    });

    const { avatar = '', github = '', username = '' } = author;

    return (
        <div>
            <div className="upper_btns">
                <Button name={'목록'} className="white" />
                {user.id === author.id && (
                    <AuthorButtons articleId={article.id} />
                )}
            </div>
            <Divider className="article_upper_divider" />
            <div className="box_post_title">
                <div className="title_info">
                    <h1>{title}</h1>
                    <div>
                        <time>{dateView}</time>
                        <strong>{username}</strong>
                    </div>
                </div>
                <span className="title_right_side">
                    <span className="title_icons">
                        <span className="title_icon">
                            <CommentIcon /> {commentCount}
                        </span>
                        <span className="title_icon">
                            <EyeIcon /> {viewCount}
                        </span>
                    </span>
                    <Avatar src={avatar} github={github} />
                </span>
            </div>
        </div>
    );
};

export default ArticleTitle;
