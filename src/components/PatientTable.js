import React, { useEffect, useState } from 'react'
import './main.css'
import Pagination from './Pagination'

const PatientTable = () => {
    const headers = ['Name', 'Age', 'M/F', '']
    const [currentPage, setCurrentPage] = useState(1)
    const [paginatedData, setPaginatedData] = useState([])

    useEffect(() => {
        let dataLimit = 5
        let start = (currentPage - 1) * dataLimit
        let end = start + 5 <= data.length ? start + 5 : data.length
        setPaginatedData(data.slice(start, end))
    }, [currentPage])

    const data = [
        {
            name: 'Jak',
            age: '25',
            gender: 'Male',
            tags: ['Positive'],
        },
        {
            name: 'Joud',
            age: '22',
            gender: 'Female',
            tags: ['Negative'],
        },
        {
            name: 'Mani',
            age: '30',
            gender: 'Female',
            tags: ['Negative'],
        },
        {
            name: 'Fedifa',
            age: '7',
            gender: 'Female',
            tags: ['Negative'],
        },
        {
            name: 'Eman',
            age: '67',
            gender: 'Female',
            tags: ['Negative'],
        },
        {
            name: 'Habbeb',
            age: '44',
            gender: 'Male',
            tags: ['Negative'],
        },
        {
            name: 'Maher',
            age: '20',
            gender: 'Male',
            tags: ['Positive'],
        },
        {
            name: 'Exak',
            age: '44',
            gender: 'Female',
            tags: ['Positive'],
        },
    ]

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
                                <th scope="row">{record.name}</th>
                                <td>{record.age}</td>
                                <td>{record.gender}</td>
                                <td>
                                    {record.tags.map((tag) => (
                                        <span
                                            className={`badge ${
                                                tag === 'Positive'
                                                    ? 'Low'
                                                    : 'High'
                                            } me-2`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </td>
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

export default PatientTable
