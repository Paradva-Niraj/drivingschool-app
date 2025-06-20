import "../style/Package.css"
import { useNavigate } from "react-router-dom";
function Package() {

    const navigate = useNavigate();

    const handleaddcomponent = () => {
        navigate("/dashboard/addpackage");
    }

    return (
        <>
            <div className="package-container">
                <div className="package-page">
                    <h2>Packages</h2>
                    <button onClick={handleaddcomponent}>
                        <svg
                            aria-hidden="true"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                        Add Package
                    </button>
                </div>
                <div className="package-card">
                    <div className="package-title">Package A</div>

                    <div className="package-body">
                        <div className="package-left">
                            <p><strong>Price:</strong> <span className="highlight">$1000</span></p>
                            <p><strong>Duration:</strong> 1 Month</p>
                            <p><strong>Lessons:</strong> 15 Driving Sessions</p>
                        </div>

                        <div className="package-right">
                            <p><strong>Vehicle:</strong> Manual / Auto</p>
                            <p><strong>Theory:</strong> Included</p>
                            <p><strong>Test Fee:</strong> Included</p>
                        </div>
                    </div>

                    <div className="package-actions">
                        <button className="edit-btn">Edit</button>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Package;