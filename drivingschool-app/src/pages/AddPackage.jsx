import '../style/AddPackage.css'
import { useState } from 'react';

function AddPackage() {

    const [form, setForm] = useState({
        name: '',
        price: '',
        duration: '',
        lessons: '',
        vehicle: 'both',
        theory: 'yes',
        testFee: 'yes',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form); // Replace with API call
    };

    return (
        <>
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
                        <option value="manual">Manual</option>
                        <option value="auto">Auto</option>
                        <option value="both">Both</option>
                    </select>
                </div>

                <div className="form-row">
                    <label>Theory Included</label>
                    <select name="theory" value={form.theory} onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="form-row">
                    <label>Test Fee Included</label>
                    <select name="testFee" value={form.testFee} onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">Add Package</button>
            </form>
        </>
    );
}

export default AddPackage;