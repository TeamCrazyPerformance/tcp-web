import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import "./style.scss";

export type PaginationProps = Pick<
    Partial<ReactPaginateProps>,
    "marginPagesDisplayed" | "pageRangeDisplayed"
> &
    Omit<ReactPaginateProps, "marginPagesDisplayed" | "pageRangeDisplayed">;

const Pagination = (props: PaginationProps) => {
    const {
        pageCount,
        onPageChange,
        pageRangeDisplayed = 3,
        marginPagesDisplayed = 1,
        previousLabel = "<",
        nextLabel = ">",
        breakLabel = "...",
        ...rest
    } = props;

    return (
        <ReactPaginate
            {...rest}
            previousLabel={previousLabel}
            nextLabel={nextLabel}
            breakLabel={breakLabel}
            pageCount={pageCount}
            onPageChange={onPageChange}
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={marginPagesDisplayed}
            containerClassName={"pagination"}
            activeClassName={"active"}
        />
    );
};

export default Pagination;
