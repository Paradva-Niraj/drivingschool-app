import '../style/Home.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [list, setList] = useState([
        { title: 'Students', count: 2, link: 'students' },
        { title: 'Staff', count: 3, link: 'staff' },
        { title: 'Package', count: 5, link: 'package' },
        { title: 'Admins', count: 1, link: 'admin' },
        { title: 'Enquiry', count: 4, link: 'Enquiry' },
    ]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL_PHONE}/api/package/sendpackagecount`,{
            headers : {
                Authorization : `bearer ${token}`
            }
        })
        .then(res=>{
            list[2].count=res.data.count;
        })
        .catch(res=>{
        })
    },[])

    return (
        <>
            <div className='cards'>
                {
                    list.map((item, index) => (
                        <div
                            className="card"
                            key={index}
                            onClick={() => {navigate(`/dashboard/${item.link}`)}}
                        >
                            <img src={`/icon${index + 1}.png`} alt="info" srcSet="" />
                            <span>{item.title}</span>
                            <span>{item.count}</span>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Home;