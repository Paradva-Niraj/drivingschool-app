import { NavLink } from "react-router-dom";
function Adminnav({ setSelectedSection }) {
    return (
        <>
            <div className="nav-logo">
                <div>
                    <img src="logo.png" alt="" srcSet="" />
                </div>
                <div>
                    Driving School
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
        </>
    );
}

export default Adminnav;