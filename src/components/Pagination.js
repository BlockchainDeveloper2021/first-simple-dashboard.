import React, { useState } from 'react'

const Pagination = ({
    dataLength,
    dataLimit = 5,
    pageLimit = 3,
    currentPage,
    setCurrentPage,
}) => {
    const [pages] = useState(Math.ceil(dataLength / dataLimit))

    const goToNextPage = () => {
        if (currentPage === pages) return
        setCurrentPage((prevState) => prevState + 1)
    }

    const goToPreviousPage = () => {
        if (currentPage === 1) return
        setCurrentPage((prevState) => prevState - 1)
    }

    const changePage = (pageNumber) => {
        if (pageNumber > pages) return
        setCurrentPage(pageNumber)
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
    }

    return (
        <div
            aria-label="Page navigation"
            className="mt-2 me-2 d-flex justify-content-end"
        >
            <ul className="pagination mb-2">
                <li
                    className={`page-item ${currentPage === 1 && 'disabled'}`}
                    onClick={goToPreviousPage}
                >
                    <div className="page-link">Previous</div>
                </li>
                {getPaginationGroup().map((pageNumber) => (
                    <li
                        className={`page-item ${
                            currentPage === pageNumber && 'active'
                        } ${pageNumber > pages && 'disabled'}`}
                        onClick={() => changePage(pageNumber)}
                    >
                        <div className="page-link">{pageNumber}</div>
                    </li>
                ))}
                <li
                    className={`page-item ${
                        currentPage === pages && 'disabled'
                    }`}
                    onClick={goToNextPage}
                >
                    <div className="page-link">Next</div>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
