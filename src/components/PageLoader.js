import React from 'react'

const PageLoader = () => {
    return (
        <div
            className="w-100 vh-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: '#2a9391', gap: '2rem' }}
        >
            <div className="spinner-grow text-light" role="status"></div>
            <div className="spinner-grow text-light" role="status"></div>
            <div className="spinner-grow text-light" role="status"></div>
        </div>
    )
}

export default PageLoader
