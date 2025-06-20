import '../style/AddPackage.css'
import { useState } from 'react';
import axios from 'axios';
import Info from "../components/Info";

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

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(form);

        const token = localStorage.getItem('token')
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


    return (
        <>
            {
                error && <Info message={error} type="error" onClose={() => (setError(''))} />
            }
            {
                success && <Info message={success} type="success" onClose={() => (setSuccess(''))} />
            }
            <form className="add-package-form" onSubmit={handleSubmit}>
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

                <button type="submit" className="submit-btn">Add Package</button>
            </form>
        </>
    );
}

export default AddPackage;