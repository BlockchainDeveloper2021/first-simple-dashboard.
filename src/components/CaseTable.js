import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import Pagination from './Pagination'

const CaseTable = () => {
    const headers = ['Case', 'Description', 'Status']
    const [currentPage, setCurrentPage] = useState(1)
    const [paginatedData, setPaginatedData] = useState([])

    const data = [
        {
            case: '1',
            description: 'High-pressure, 40°C or higher – very high fever',
            status: 'Under Processing',
        },
        {
            case: '2',
            description: 'Low-pressure, 38°C or higher – very high fever',
            status: 'Completed',
        },
        {
            case: '3',
            description: 'High-pressure, 40°C or higher – very high fever',
            status: 'Under Processing',
        },
        {
            case: '4',
            description: 'Low-pressure, 38°C or higher – very high fever',
            status: 'Completed',
        },
        {
            case: '5',
            description: 'Low-pressure, 38°C or higher – very high fever',
            status: 'Under Processing',
        },
        {
            case: '6',
            description: 'Low-pressure, 38°C or higher – very high fever',
            status: 'Completed',
        },
        {
            case: '7',
            description: 'Low-pressure, 38°C or higher – very high fever',
            status: 'Under Processing',
        },
        {
            case: '8',
            description: 'Low-pressure, 38°C or higher – very high fever',
            status: 'Under Processing',
        },
        {
            case: '9',
            description: 'Low-pressure, 38°C or higher – very high fever',
            status: 'Under Processing',
        },
        {
            case: '10',
            description: 'Low-pressure, 38°C or higher – very high fever',
            status: 'Completed',
        },
    ]

    useEffect(() => {
        let dataLimit = 5
        let start = (currentPage - 1) * dataLimit
        let end = start + 5 <= data.length ? start + 5 : data.length
        setPaginatedData(data.slice(start, end))
    }, [currentPage])

    return (
        <>
            <div class="card table-responsive">
                <table class="table mb-0">
                    <thead>
                        <tr>
                            {headers.map((header) => (
                                <th scope="col">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((record) => (
                            <tr>
                                <th scope="row">{record.case}</th>
                                <td>{record.description}</td>
                                <td>{record.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    dataLength={data.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </>
    )
}

export default CaseTable
