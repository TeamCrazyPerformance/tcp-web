import React from "react";
import "./style.scss";
import CommentCountIcon from "../../atoms/CommentCountIcon";

interface PostProps {
    /**
     * 게시글 번호
     */
    no: number | string;
    /**
     * 제목
     */
    title: string;
    /**
     * 댓글 수
     */
    commentCount: number;
    /**
     * 작성일자
     */
    date: Date | string;
    /**
     * 작성자
     */
    writer: string;
    /**
     * 조회수
     */
    viewCount: number;
}

export interface TableProps {
    /**
     * 테이블 칼럼 이름
     */
    columns: string[];
    /**
     * 포스트들
     */
    posts?: PostProps[];
}

const Columns = (props: PostProps) => {
    const { no, title, commentCount, date, writer, viewCount } = props;
    const className = no === "공지" ? "notice" : "";
    const dateView = date instanceof Date ? date.toLocaleDateString() : date;
    return (
        <tr className={className}>
            <td>{no}</td>
            <td>{title}</td>
            <td>
                <CommentCountIcon count={commentCount} />
            </td>
            <td>{dateView}</td>
            <td>{writer}</td>
            <td>{viewCount}</td>
        </tr>
    );
};

const PostTable = (props: TableProps) => {
    const { columns, posts = [] } = props;

    return (
        <table>
            <tr>
                {columns.map(col => (
                    <th> {col} </th>
                ))}
            </tr>
            {posts.map((post: PostProps) => (
                <Columns {...post} />
            ))}
        </table>
    );
};

PostTable.defaultProps = {
    columns: ["번호", "제목", "", "날짜", "글쓴이", "조회수"],
    posts: []
};

export default PostTable;
