import '../style/Landing.css'
import Header from '../components/Header';
import { useState } from 'react';
import Info from '../components/Info';
import axios from 'axios';

function Landing() {

    const [sucess, setSucess] = useState();
    const [error, setError] = useState();
    const [form, setForm] = useState({
        name: '',
        email: '',
        phonenumber: '',
        message: '',
        date: new Date().toLocaleString(),
    });

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(form);
        axios.post(`${import.meta.env.VITE_BASE_URL_PHONE}/api/enquiry/sendenquiry`, {
            form
        })
            .then(res => {
                setSucess(res.data.message);
                setForm({
                    name: '',
                    email: '',
                    phonenumber: '',
                    message: '',
                    date: new Date().toLocaleString(),
                });
                console.log("he");
            })
            .catch(err => {
                setError(err.response?.data?.error || "Check gmail ");
                console.error("Submit Error:", err);
            });

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <div className='main'>
            {
                error && <Info message={error} onClose={() => setError('')} />
            }
            {
                sucess && <Info message={sucess} type='success' onClose={() => setSucess('')} />
            }
            {/* header */}
            <Header />

            {/* name and image */}

            <div className='home' id='home'>
                <div className='text'>
                    <p>DRIVING <br /> SCHOOL</p>
                    <p style={{ color: 'yellow' }}>Learn From The Expert</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aperiam assumenda quidem totam quaerat nisi eligendi ratione. Ad minus iure distinctio ipsa exercitationem explicabo iusto dolores, sit officia, praesentium magnam blanditiis enim tempore architecto placeat, natus rerum laudantium libero eos odit! Dolor reprehenderit beatae dicta. Provident soluta temporibus in nemo.</p>
                </div>
                <div>
                    <img src="driveperson.png" alt="" srcSet="" />
                </div>
            </div>

            <section className="about" id='aboutus'>
                <h2>About Us</h2>
                <p>We are a certified driving school helping learners become safe, confident drivers. Our experienced instructors provide personalized training tailored to all experience levels.</p>
            </section>

            {/* Pricing Section */}
            <section className="pricing" id="pricing">
                <h2>Pricing</h2>
                <ul>
                    <li>🚗 Basic Course (10 hrs) - $100</li>
                    <li>🚘 Standard Course (20 hrs) - $180</li>
                    <li>🚙 Advanced Course (30 hrs + test prep) - $250</li>
                </ul>
            </section>

            {/* Inquiry Section */}
            <section className="inquiry" id='inquery'>
                <h2>Inquiry Form</h2>
                <form onSubmit={(e) => handlesubmit(e)}>
                    <input type="text" placeholder="Your Name" name="name" value={form.name} onChange={handleChange} required />
                    <input type="email" placeholder="Your Email" name="email" value={form.email} onChange={handleChange} required />
                    <input type="tel" placeholder="Phone Number" value={form.phonenumber} name='phonenumber' onChange={handleChange} required />
                    <textarea placeholder="Your Message" value={form.message} name='message' onChange={handleChange} required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Landing;