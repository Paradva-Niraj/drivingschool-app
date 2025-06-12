import '../style/Dashboard.css';
import Adminnav from '../components/Adminnav';

function Dashboard() {

    return (
        <div className='admin'>
            <div className='navbar'>
                <Adminnav />
            </div>
            <div className='information'>
                <div className='title'>
                    Driving School Management System - admin
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;