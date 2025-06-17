import '../style/Dashboard.css';
import Adminnav from '../components/Adminnav';
import { useEffect, useState } from 'react';
import Home from './Home';
import axios from 'axios';
import { useNavigate, Outlet } from "react-router-dom";
import Loading from '../components/Loading.jsx';

function Dashboard() {

    const navigate = useNavigate();
    let [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (localStorage.getItem("token")==null) {
            navigate('/login');
        }
        else {
            axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/dashboard`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
                .then(res => {
                    console.log('Access granted:', res.data);
                    setData(JSON.parse(localStorage.getItem("driving-data")));
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Access denied:');
                    navigate('/login');
                });
        }
    }, []);

    if (loading) { return <Loading /> }

    return (
        <div className='admin'>
            <div className='navbar'>
                <Adminnav />
            </div>
            <div className='information'>
                <div className='title'>
                    Driving School Management System - {data && data.name}
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;