import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Login = () =>{

    const useNavigate = useNavigate();
    const handleLogin = () => {
        Navigate('/')
    }
    return(
        <div className='container mt-5'>
            <button onClick={handleLogin} className='btn btn-info'>Login</button>
        </div>
    )
} 