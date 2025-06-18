import '../style/Home.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const [list, setList] = useState([
        { title: 'Students', count: 2, link: 'students' },
        { title: 'Staff', count: 3, link: 'staff' },
        { title: 'Package', count: 5, link: 'package' },
        { title: 'Admins', count: 1, link: 'admin' },
        { title: 'Inquiry', count: 4, link: 'Inquiry' },
    ]);

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
                            <img src={`icon${index + 1}.png`} alt="info" srcSet="" />
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