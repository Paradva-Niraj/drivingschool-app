import { useEffect, useState } from "react";
import "../style/Package.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Info from "../components/Info";

function Package() {

    const navigate = useNavigate();
    var [packages, setPackages] = useState([]);
    const [error, setError] = useState(null);
    const role = JSON.parse(localStorage.getItem('driving-data')).role;

    const handleaddcomponent = () => {
        navigate("/dashboard/addpackage");
    }


    const handleEdit = (pack) => {
        // console.log(pack);
        navigate(`/dashboard/AddPackage/`, { state: { formData: pack } });

    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL_PHONE}/api/package/packages`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setPackages(res.data);
                // console.log(res.data);
            })
            .catch(err => {
                setError(err.response?.data?.error || "Something went wrong");
            })
    }, []);

    return (
        <>
            {
                error && <Info message={error} type="error" onClose={() => setError(null)} />
            }
                <div className="package-container">
            {
                (role === "superadmin" || role === "admin") && 
                    <div className="package-page">
                        <h2>Packages</h2>
                        <button onClick={handleaddcomponent}>
                            <svg
                                aria-hidden="true"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                            Add Package
                        </button>
                    </div>
            }

                    {
                        packages.map((pack, index) => (
                            <div key={index} className="package-card">
                                <div className="package-title">{pack.name}</div>
                                <div className="package-body">
                                    <div className="package-left">
                                        <p><strong>Price:</strong> <span className="highlight">{pack.price}</span></p>
                                        <p><strong>Duration:</strong> {pack.duration} Month</p>
                                        <p><strong>Lessons:</strong> {pack.lessons} Driving Sessions</p>
                                    </div>

                                    <div className="package-right">
                                        <p><strong>Vehicle:</strong> {pack.vehicle} </p>
                                        <p><strong>Theory:</strong> {
                                            (pack.theory) ? "Included" : "Not Included"
                                        } </p>
                                        <p><strong>
                                            Test Fee:
                                        </strong>{(pack.testfee) ? " Included" : " Not Included"}</p>
                                    </div>
                                </div>
                                {
                                    (role === "superadmin") && (<div className="package-actions">
                                        <button className="edit-btn" onClick={() => handleEdit(pack)}>Edit</button>
                                    </div>)
                                }
                            </div>
                        ))
                    }
                </div>


        </>
    );
}

export default Package;