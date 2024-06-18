import React, { useState } from 'react';
import './Login.css';
// import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { notification } from 'antd';

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if (!errors.email && !errors.password) {
            axios.post('http://localhost:9000/login', values)
           
                .then(res => {
                    sessionStorage.setItem("token", res.data.data.access_token)
                    if (res.data.data.access_token) {
                        notification.success({
                            message:"Logged in successfully!"
                        })
                        console.log('res', res)
                        // navigate('/employeelist')
                        window.location.href = '/employeelist'
                    } else {
                        alert("Try again");
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='login-wrapper'>
            <div className='left'>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p>Welcome back! Please login to your account.</p>
                    <div className='input-container'>
                        <div className='input-box'>
                            <label>Username</label>
                            <input type="text" placeholder='User Name' name='username' onChange={handleInput} required />
                            {/* {errors.email && <span> {errors.username}</span>} */}
                        </div>

                        <div className='input-box'>
                            <label>Password</label>
                            <input type="password" placeholder='Password' name='password' onChange={handleInput} required />
                            {/* {errors.password && <span> {errors.password}</span>} */}
                        </div>
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="a">Forgot password?</a>
                    </div>
                    <button name='login-btn' type='submit'>Login</button>

                </form>
            </div>
            <div className='right'>
                {/* <img>

                </img> */}
            </div>

        </div>
    )
}

export default Login