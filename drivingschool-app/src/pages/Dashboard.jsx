import '../style/Dashboard.css';
import Adminnav from '../components/Adminnav';
import { useEffect, useState } from 'react';
import Home from './Home';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const [selectedSection, setSelectedSection] = useState('dashboard');
    const [list, setList] = useState([
        { title: 'Students', count: 2 },
        { title: 'Staff', count: 3 },
        { title: 'Package', count: 5 },
        { title: 'Admins', count: 1 },
        { title: 'Inqueries', count: 4 },
    ]);
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
                <Adminnav setSelectedSection={setSelectedSection} />
            </div>
            <div className='information'>
                <div className='title'>
                    Driving School Management System - admin
                </div>
                {selectedSection === "dashboard" && (
                    <div className='cards'>
                        {
                            list.map((item, index) => (
                                <div
                                    className="card"
                                    key={index}
                                    onClick={() => setSelectedSection(item.title.toLowerCase())}
                                >
                                    <img src={`icon${index + 1}.png`} alt="info" srcSet="" />
                                    <span>{item.title}</span>
                                    <span>{item.count}</span>
                                </div>
                            ))
                        }
                    </div>
                )}

                {selectedSection === "students" && <Home />}
                {selectedSection === "staff" && <Home />}
                {selectedSection === "package" && <div>📦 Package Component</div>}
                {selectedSection === "admins" && <div>🛡 Admin Management</div>}
                {selectedSection === "inqueries" && <div>📩 Inquiry Management</div>}
            </div>
        </div>
    );
}

export default Dashboard;