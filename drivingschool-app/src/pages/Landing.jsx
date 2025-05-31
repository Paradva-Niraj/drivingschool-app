import '../style/Landing.css'
import Header from '../components/Header';

function Landing() {
    return (
        <>
            {/* header */}
            <Header />

            {/* name and image */}

            <div className='home'>
                <div className='text'>
                    <p>DRIVING <br /> SCHOOL</p>
                    <p>Learn From The Expert</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aperiam assumenda quidem totam quaerat nisi eligendi ratione. Ad minus iure distinctio ipsa exercitationem explicabo iusto dolores, sit officia, praesentium magnam blanditiis enim tempore architecto placeat, natus rerum laudantium libero eos odit! Dolor reprehenderit beatae dicta. Provident soluta temporibus in nemo.</p>
                </div>
                <div>
                    <img src="driveperson.png" alt="" srcset="" />
                </div>
            </div>


            {/* About Us Section */}
            <section className="about">
                <h2>About Us</h2>
                <p>We are a certified driving school helping learners become safe, confident drivers. Our experienced instructors provide personalized training tailored to all experience levels.</p>
            </section>

            {/* Pricing Section */}
            <section className="pricing">
                <h2>Pricing</h2>
                <ul>
                    <li>🚗 Basic Course (10 hrs) - $100</li>
                    <li>🚘 Standard Course (20 hrs) - $180</li>
                    <li>🚙 Advanced Course (30 hrs + test prep) - $250</li>
                </ul>
            </section>

            {/* Inquiry Section */}
            <section className="inquiry">
                <h2>Inquiry Form</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="tel" placeholder="Phone Number" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default Landing;