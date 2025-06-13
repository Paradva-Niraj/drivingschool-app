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
            <div onClick={() => setSelectedSection('dashboard')}>
                Dashboard
            </div>
            <div onClick={() => setSelectedSection('students')}>
                Students
            </div>
            <div onClick={() => setSelectedSection('staff')}>
                Staff
            </div>  
            <div onClick={() => setSelectedSection('package')}>
                Package
            </div>
            <div onClick={() => setSelectedSection('inqueries')}>
                Inqueries
            </div>
        </div>
    </>
    );
}

export default Adminnav;