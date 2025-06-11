import '../style/Dashboard.css';
import Adminnav from '../components/Adminnav';

function Dashboard() {

    return (
        <div className='admin'>
            <div className='navbar'>
                <Adminnav />
            </div>
            <div className='information'>
                admin access
            </div>
        </div>
    );
}

export default Dashboard;