import React, { useState } from 'react';
import './RegisterEmployee.css';
import Validation from './RegisterEmployeeValidation';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { AuthApi } from '../api-services/axios.config';

const RegisterEmployee = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        nationalIdentity: 0,
        telephone: '',
        department: '',
        position: '',
        laptopManufacturer: '',
        laptopModel: '',
        serialNumber: ''
    })


    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async(e) => {
        setErrors(Validation(values));
        // if (errors.firstName === "" && errors.lastName === "" && errors.email === "" && errors.nationalIdentity === "" && errors.telephone === "" && errors.department === "" && errors.position === "" && errors.laptopManufacturer === "" && errors.laptopModel === "" && errors.serialNumber === "") {
            await AuthApi.post('http://localhost:9000/employees/addEmployee',  values)
                .then(res => {
                    if(res.data.data.success){
                        notification.success({
                            message:"Employee added successfully!"
                        })
                    }
                    navigate('/employeelist');
                })

                .catch(err => console.log(err));
        // }
    }

    return (
        <div className='register-wrapper'>
            <form action="" >
                <div className='register-header-text'>
                    <h1>Register Employee</h1>
                    <p>Welcome on board! Enter valid information to register an employee</p>
                </div>
                <div className='form-info-wrapper'>
                    <div className='personal-info'>
                        <div className='input-box'>
                            <input type="text" placeholder='FirstName' name='firstName' onChange={handleInput} required />
                        </div>

                        <div className='input-box'>
                            <input type="text" placeholder='LastName' name='lastName' onChange={handleInput} required />
                        </div>

                        <div className='input-box'>
                            <input type="text" placeholder='Email' name='email' onChange={handleInput} required />
                            {/* {errors.password && <span> {errors.password}</span>} */}
                        </div>

                        <div className='input-box'>
                            <input type="text" placeholder='National Identity' name='nationalIdentity' onChange={handleInput} required />
                        </div>

                        <div className='input-box'>
                            <input type="text" placeholder='Telephone' name='telephone' onChange={handleInput} required />
                        </div>
                    </div>

                    <div className='company-info'>
                        <div className='input-box'>
                            <input type="text" placeholder='Department' name='department' onChange={handleInput} required />
                        </div>

                        <div className='input-box'>
                            <input type="text" placeholder='Position' name='position' onChange={handleInput} required />
                        </div>

                        <div className='input-box'>
                            <input type="text" placeholder='Laptop Manufacturer' name='laptopManufacturer' onChange={handleInput} required />
                        </div>

                        <div className='input-box'>
                            <input type="text" placeholder='Laptop Model' name='laptopModel' onChange={handleInput} required />
                        </div>

                        <div className='input-box'>
                            <input type="text" placeholder='Serial Number' name='serialNumber' onChange={handleInput} required />
                        </div>
                    </div>
                </div>
                <button name='register-btn' type="button" onClick={(e) => handleSubmit(e)}>Register Employee</button>

            </form>
        </div>
    )
}

export default RegisterEmployee