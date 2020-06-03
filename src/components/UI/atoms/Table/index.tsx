import React from "react";
import Columns from "./Columns";
import "./style.scss";

export interface TableProps<T> {
    /**
     * 테이블 칼럼 이름
     */
    headers?: string[];
    /**
     * 각 칼럼 데이터
     */
    columns?: T[];
}

const Table = (props: TableProps<(string | JSX.Element)[]>) => {
    const { headers, columns = [] } = props;

    return (
        <section className="table">
            <div className="table_caption">
                <Columns columns={headers} />
            </div>
            {columns.map(col => (
                <Columns columns={col} />
            ))}
        </section>
    );
};

Table.defaultProps = {
    headers: [],
    columns: [],
};

export default Table;
