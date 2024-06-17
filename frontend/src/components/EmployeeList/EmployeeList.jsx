import React, { useEffect, useState } from "react";
import { AuthApi } from '../api-services/axios.config';
import Search from "./Search";
import TableList from './Table';
import Modal from "./Modal";
import './EmployeeList.css';

const EmployeeList = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getAllEmployees = async () => {
        try {
            const response = await AuthApi.get('/employees');
            setData(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    useEffect(() => {
        getAllEmployees();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = data.filter(employee =>
        Object.values(employee).some(value =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="container">
            <div className="employee-list-header">
                <div className="employee-list">
                    <h1>Registered Employees</h1>
                    <p>All employees in the system with their equipment information</p>
                </div>
                <div className="add-employee-btn">
                    <Modal />
                </div>
            </div>
            <div className="all-employees">
                <div className="all-employees-header">
                    <div>
                        <h3>All Employees</h3>
                    </div>
                    <div>
                        <Search searchQuery={searchQuery} handleSearch={handleSearch} />
                    </div>
                </div>
                <TableList data={filteredData} />
            </div>
        </div>
    );
};

export default EmployeeList;