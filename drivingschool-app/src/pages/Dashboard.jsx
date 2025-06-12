import '../style/Dashboard.css';
import Adminnav from '../components/Adminnav';
import { useState } from 'react';

function Dashboard() {

    const [list,setList] = useState([
        {title:'Students', count: 2},
        {title:'Teachers', count: 3},
        {title:'Parents', count: 5},
        {title:'Admins', count: 1},
        {title:'Courses', count: 4},
    ]);

    return (
        <div className='admin'>
            <div className='navbar'>
                <Adminnav />
            </div>
            <div className='information'>
                <div className='title'>
                    Driving School Management System - admin
                </div>
                <div className='cards'>
                    {
                        list.map((item, index) => {
                            return(
                                <div className="card" key={index}>
                                    <img src={`icon${index+1}.png`} alt="info" srcSet="" />
                                    <span>{item.title}</span>
                                    <span>{item.count}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Dashboard;