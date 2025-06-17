import '../style/info.css'
import { useEffect } from 'react';
function Info({ message, type = "error", onClose }) {

    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`info ${type}`}>
            <span>{message}</span>
            <button onClick={onClose}>×</button>
        </div>
    );
}

export default Info;