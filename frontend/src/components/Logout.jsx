import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const logout = async () => {
            try {
                const res = await axios.post(
                    '/api/logout',
                    {},
                    { withCredentials: true }
                );

                if (res.status === 200) {
                    localStorage.removeItem('_id');
                    localStorage.removeItem('email');
                    navigate('/');
                    window.location.reload();
                }
            } catch (error) {
                console.error(error);
            }
        };

        logout();
    }, [navigate]);
    return <div>Logout</div>;
};

export default Logout;