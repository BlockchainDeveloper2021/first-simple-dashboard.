import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './main.css'

const SideBar = () => {
    const pathname = useLocation().pathname

    return (
        <div className="d-flex flex-column flex-shrink-0 p-4 text-white sidebar">
            <div className="d-flex align-items-center me-md-auto text-white text-decoration-none">
                <p className="my-0">
                    <span className="fs-4 text">Covid-19</span>
                    <br />
                    <span className="fs-6 text">2019 - 2022</span>
                </p>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link
                        to="/About"
                        className={`nav-link sidebar-link ${
                            pathname.startsWith('/About')
                                ? 'active'
                                : 'text-white'
                        }`}
                        aria-current="page"
                    >
                        <i className="bi bi-file-earmark-person me-2"></i>
                        About us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/dashboard"
                        className={`nav-link sidebar-link ${
                            pathname.startsWith('/dashboard')
                                ? 'active'
                                : 'text-white'
                        }`}
                    >
                        <i className="bi bi-table  d-inline-block me-2"></i>
                        Dashboard
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
