import React from "react";

interface Props {
    columns: (string | JSX.Element)[] | undefined;
}

const Columns = (props: Props) => {
    const { columns } = props;

    return (
        <article className="table_col">
            {columns?.map((col, idx) => (
                <span key={idx}>{col}</span>
            ))}
        </article>
    );
};

export default Columns;
