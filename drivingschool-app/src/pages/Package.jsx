import "../style/Package.css"
function Package() {
    return (
        <>
            <h2>Packages</h2>
            <div className="package-container">
                <div className="package-card">
                    <h3>Package 1</h3>
                    <p><strong>Price:</strong> $1000</p>
                    <p><strong>Duration:</strong> 1 month</p>
                    <p><strong>Sessions:</strong> 20 total (1 hour each)</p>
                    <p><strong>Vehicle Type:</strong> Manual</p>
                    <p><strong>License Type:</strong> Four-Wheeler</p>
                    <p><strong>Batch:</strong> Morning & Evening</p>
                    <p><strong>Start Date:</strong> June 10, 2025</p>
                    <p><strong>Extras:</strong> Free test & learner's support</p>
                    <button>Edit</button>
                </div>
            </div>


        </>
    );
}

export default Package;