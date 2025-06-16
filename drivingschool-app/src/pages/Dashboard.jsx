import '../style/Dashboard.css';
import Adminnav from '../components/Adminnav';
import { useEffect, useState } from 'react';
import Home from './Home';
import axios from 'axios';
import { useNavigate,Outlet } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

   
    useEffect(() => {
        const token = localStorage.getItem("token");
        // console.log(token);

        axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/dashboard`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => {
                console.log('Access granted:', res.data);
            })
            .catch(err => {
                console.error('Access denied:', err.response.data);
                navigate('/login');
            });
    },[]);

    return (
        <div className='admin'>
            <div className='navbar'>
                <Adminnav/>
            </div>
            <div className='information'>
                <div className='title'>
                    Driving School Management System - admin
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;