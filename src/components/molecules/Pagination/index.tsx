import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import "./style.scss";

type PagianationProps = ReactPaginateProps;

const Pagination = (props: PagianationProps) => {
    const { pageCount, onPageChange, ...rest } = props;
    return (
        <ReactPaginate
            {...rest}
            pageCount={pageCount}
            onPageChange={onPageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
        />
    );
};

export default Pagination;
