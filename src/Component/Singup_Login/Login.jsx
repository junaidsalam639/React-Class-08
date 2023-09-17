import React, { useState } from 'react'
import { db , auth , storage , signInWithEmailAndPassword } from '../Config/Firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = () => {
        if (email == '' || password == '') {
            alert('Please Fill The Input');
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/gallery')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                    navigate('/singup')
                });
        }
    }
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='container'>
                <h1 className='fw-bold'>Account Login</h1>
                <div className="input-group my-3 px-5">
                    <input type="email" className="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group my-3 px-5">
                    <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-group my-3 px-5">
                    <button className='btn btn-success fw-bold' onClick={login}>Account Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
