import React from 'react'
import CaseTable from './CaseTable'

import PatientTable from './PatientTable'
import './main.css'

const DetailCard = ({ icon, title, data }) => (
    <div className="card">
        <div className="card-body d-flex align-items-center gap-3">
            <div className="avatar">{icon}</div>
            <p className="my-0 fs-5">
                {title}: <strong>{data}</strong>
            </p>
        </div>
    </div>
)

const Dashboard = () => {
    return (
        <>
            <div className="mb-6">
                <div className="row ">
                    <div className="col-md-6 mb-4">
                        <DetailCard
                            icon={<i className="bi bi-people-fill"></i>}
                            title="Number of patients"
                            data="8"
                        />
                    </div>
                    <div className="col-md-6 mb-4">
                        <DetailCard
                            icon={<i className="bi bi-person-bounding-box"></i>}
                            title="Number of patients in waiting"
                            data="3"
                        />
                    </div>
                </div>
                <PatientTable />
            </div>
            <div className="mb-5">
                <div className="row ">
                    <div className="col-md-6 mb-4">
                        <DetailCard
                            icon={<i class="bi bi-clipboard-x"></i>}
                            title="Number of negative cases"
                            data="4"
                        />
                    </div>
                    <div className="col-md-6 mb-4">
                        <DetailCard
                            icon={<i class="bi bi-check2-all"></i>}
                            title="Number of positive cases"
                            data="1"
                        />
                    </div>
                </div>
                <CaseTable />
            </div>
        </>
    )
}

export default Dashboard
