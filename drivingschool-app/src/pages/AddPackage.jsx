import '../style/AddPackage.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Info from "../components/Info";
import { useLocation,Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AddPackage() {

    const [form, setForm] = useState({
        name: '',
        price: '',
        duration: '',
        lessons: '',
        vehicle: 'Auto/Manual',
        theory: 'true',
        testfee: 'true',
    });

    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state?.formData;
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        if (formData) {
            setForm({
                name: formData.name,
                price: formData.price,
                duration: formData.duration,
                lessons: formData.lessons,
                vehicle: (formData.vehicle == "both") ? 'Auto/Manual' : formData.vehicle,
                theory: (formData.theory) ? 'true' : 'false',
                testfee: (formData.fee) ? 'true' : 'false',
        })
        }
    },[])

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(form);
        if(form.name === "" || form.price === "" || form.duration === '' || form.lessons === ''){
            setError("Fill The Form");
            return;
        }

        axios.post(`${import.meta.env.VITE_BASE_URL_PHONE}/api/package/addpackage`, { form }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => {
                setSuccess(res.data.message)
                setForm({
                    name: '',
                    price: '',
                    duration: '',
                    lessons: '',
                    vehicle: 'Auto/Manual',
                    theory: 'true',
                    testfee: 'true',
                });
            })
            .catch(err => {
                setError(err.response.data.error);
            });
    };

    const handleEdit = () => {

        if(form.name === "" || form.price === "" || form.duration === '' || form.lessons === ''){
            setError("Fill The Form");
            return;
        }

        axios.put(`${import.meta.env.VITE_BASE_URL_PHONE}/api/package/editpackage/${formData._id}`,{form},{
            headers : {
                Authorization : `bearer ${token}`
            }
        })
        .then(
            res=>{
                setSuccess(res.data.message);
                navigate('/dashboard/package');
            }
        )
        .catch(err=>{
            setError(err.response.data.error);
        })
    }

    const handleDelete = () => {
        // console.log("delete");
        axios.delete(`${import.meta.env.VITE_BASE_URL_PHONE}/api/package/deletepackage/${formData._id}`,{
            headers : {
                Authorization : `Bearer ${token}`,
            }
        })
        .then(
            res =>{
                setSuccess(res.data.message);
                navigate('/dashboard/package');
            }
        )
        .catch(err=>{
            setError(err.response.data.error);
        })
    }

    return (
        <>
            {
                error && <Info message={error} type="error" onClose={() => (setError(''))} />
            }
            {
                success && <Info message={success} type="success" onClose={() => (setSuccess(''))} />
            }
            <Link to="/dashboard/package" className="home-link" > &larr;Back</Link>
            <div className="add-package-form">
                <h2>Add New Package</h2>

                <div className="form-row">
                    <label>Package Name</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} />
                </div>

                <div className="form-row">
                    <label>Price ($)</label>
                    <input type="number" name="price" min="0" required value={form.price} onChange={handleChange} />
                </div>

                <div className="form-row">
                    <label>Duration (Months)</label>
                    <input
                        type="number"
                        name="duration"
                        min="1"
                        max="12"
                        required
                        value={form.duration}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label>Lessons</label>
                    <input
                        type="number"
                        name="lessons"
                        min="1"
                        max="30"
                        required
                        value={form.lessons}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label>Vehicle Type</label>
                    <select name="vehicle" value={form.vehicle} onChange={handleChange}>
                        <option value="Manual">Manual</option>
                        <option value="Auto">Auto</option>
                        <option value="Auto/Manual">Both</option>
                    </select>
                </div>

                <div className="form-row">
                    <label>Theory Included</label>
                    <select name="theory" value={form.theory} onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <div className="form-row">
                    <label>Test Fee Included</label>
                    <select name="testfee" value={form.testfee} onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                {
                    formData && <>
                    <button className='delete-btn' onClick={handleDelete}>Delete</button>
                    <button className='edit-button' onClick={handleEdit}>Save Changes</button>
                    </>
                }
                {
                    !formData && <button type='submit' onClick={handleSubmit} className='submit-btn'>Add Package</button>
                }
            </div>
        </>
    );
}

export default AddPackage;