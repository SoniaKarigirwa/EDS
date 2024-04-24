import React, { useState } from 'react';
import './Login.css';
// import { Link } from 'react-router-dom';
import Validation from './LoginValidation';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const[errors, setErrors] = useState({})
    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className='wrapper'>
            <form action="" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' name='email' onChange={handleInput} required/>
                    {errors.email && <span> {errors.email}</span>}
                </div>

                <div className='input-box'>
                    <input type="text" placeholder='Password' name='password' onChange={handleInput} required/>
                    {errors.password && <span> {errors.password}</span>}
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="a">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login