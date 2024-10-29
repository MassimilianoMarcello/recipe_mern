import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        const isMatchPasswords = password === rePassword;

        if (email && password && rePassword && isMatchPasswords) {
            const res = await axios.post(
                'http://localhost:5004/api/register',
                {
                    email,
                    password,
                    rePassword
                },
                { withCredentials: true }
            );

            if (res.status === 201) {
                console.log('User registered successfully');
                setError('');
                setEmail('');
                setPassword('');
                setRePassword('');
                navigate('/login');
            } else {
                setError('Something went wrong!');
            }
        } else {
            setError('All fields are required.');
        }
    };
    return (
        <div className="register">
            <form onSubmit={(e) => submitForm(e)}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="rePassword">RePassword</label>
                <input
                    type="password"
                    id="rePassword"
                    name="rePassword"
                    required
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />

                {error && <div className="error">{error}</div>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
