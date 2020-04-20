import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import "./style.scss";

export type PaginationProps = ReactPaginateProps;

const Pagination = (props: PaginationProps) => {
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
