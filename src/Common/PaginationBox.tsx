import React from "react";

interface IPaginationBoxProps {
  currentPage?: number;
  totalCount?: number;
  pageSize?: number;
  onPageChange?: Function;
}

const PaginationBox = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}: IPaginationBoxProps) => {
  const totalPages =
    totalCount && pageSize ? Math.ceil(totalCount / pageSize) : 0;

  const handlePrevious = () => {
    if (currentPage && currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage && onPageChange && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange && onPageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="pagination-box">
      <nav>
        <ul className="pagination pagination-primary">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </li>
          {renderPageNumbers() || 0}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationBox;
