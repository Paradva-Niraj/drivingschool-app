import { Link } from "react-router-dom";
import '../style/Enquiry.css'
import { useEffect, useState } from "react";
import axios from 'axios';
import Info from "../components/Info";

function Enquiry() {

    const [data, setData] = useState('');
    const [sucess, setSucess] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL_PHONE}/api/enquiry/enquirys`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setData(res.data);
            // console.log(res.data);

        })
            .catch(err => {
                // setData();
                // console.log(err);
            })
    }, [data])

    const handleread = (id) => {
        console.log(id);
        
        axios.post(`${import.meta.env.VITE_BASE_URL_PHONE}/api/enquiry/changeread/${id}`,{},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setData(res.data);
                // console.log(res.data);

            })
            .catch(err => {
                // setData();
                // console.log(err);
            })
    }

    return (
        <div className="enquiry-wrapper">
            {
                error && <Info message={error} onClose={() => setError('')} />
            }
            {
                sucess && <Info message={sucess} type='success' onClose={() => setSucess('')} />
            }
            <h2 className="enquiry-title">Enquiries</h2>
            <div className="enquiry-container">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div className="en-card" key={index}>
                            <h3>{item.name}</h3>
                            <p><strong>Email:</strong> {item.email}</p>
                            <p><strong>Phone:</strong> {item.phonenumber}</p>
                            <p><strong>Message:</strong> {item.message}</p>
                            <p><strong>Date:</strong> {item.date}</p>
                            <button className='read-btn' onClick={()=>handleread(item._id)} disabled={item.read}>
                                {
                                    (item.read)?'Done':'Read'
                                }
                            </button>
                        </div>

                    ))
                ) : (
                    <h3 className="no-data">No Enquiries Available</h3>
                )}

            </div>
        </div>
    );
}


export default Enquiry;