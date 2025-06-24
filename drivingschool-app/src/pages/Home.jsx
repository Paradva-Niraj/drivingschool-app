import '../style/Home.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [list, setList] = useState([
        { title: 'Students', count: null, link: 'students' },
        { title: 'Staff', count: null, link: 'staff' },
        { title: 'Package', count: null, link: 'package' },
        { title: 'Admins', count: null, link: 'admin' },
        { title: 'Enquiry', count: null, link: 'Enquiry' },
    ]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BASE_URL_PHONE}/api/package/sendpackagecount`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                const count = res.data.count ?? res.data;

                setList((prevList) =>
                    prevList.map((item) =>
                        item.title === 'Package' ? { ...item, count } : item
                    )
                );
            })
            .catch((err) => {
            });
    }, []);


    return (
        <>
            <div className='cards'>
                {
                    list.map((item, index) => (
                        <div
                            className="card"
                            key={index}
                            onClick={() => { navigate(`/dashboard/${item.link}`) }}
                        >
                            <img src={`/icon${index + 1}.png`} alt="info" srcSet="" />
                            <span>{item.title}</span>
                            <span>{(item.count != null) ? item.count : <div className='fetching'>...</div>}</span>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Home;