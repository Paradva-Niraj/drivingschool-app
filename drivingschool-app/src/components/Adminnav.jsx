import { NavLink, useNavigate } from "react-router-dom";

function Adminnav() {

    const navigate = useNavigate();

    const handlelogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('driving-data');
        navigate('/login');
    }

    return (
        <>
            <div className="nav-logo">
                <div>
                    <img src="logo.png" alt="" srcSet="" />
                </div>
                <div>
                    <div>
                        Driving School
                    </div>
                </div>
                <div>
                    <button className="logout-btn-phone" onClick={handlelogout}>Logout</button>
                </div>
            </div>
            <hr />
            <div className="nav-links">
                <div>
                    <NavLink className="Link" to="/dashboard">Dashboard</NavLink>
                </div>
                <div>
                    <NavLink className="Link" to="/dashboard/students">Students</NavLink>
                </div>
                <div>
                    <NavLink className="Link" to="/dashboard/staff">Staff</NavLink>
                </div>
                <div>
                    <NavLink className="Link" to="/dashboard/admin">Admin</NavLink>
                </div>
                <div>
                    <NavLink className="Link" to="/dashboard/package">Package</NavLink>
                </div>
                <div>
                    <NavLink className="Link" to="/dashboard/inqueries">Inqueries</NavLink>
                </div>
            </div>
            <div>
                <button className="logout-btn" onClick={handlelogout}>Logout</button>
            </div>
        </>
    );
}

export default Adminnav;