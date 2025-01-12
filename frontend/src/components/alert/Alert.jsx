import React, {useEffect} from 'react';
import './Alert.css';

const Alert = ({ type, message, onClose, autoDismiss }) => {
    useEffect(() => {
        if (autoDismiss) {
            const timer = setTimeout(onClose, autoDismiss);
            return () => clearTimeout(timer);
        }
    }, [autoDismiss, onClose]);

    return (
        <div className={`alert ${type}`} role="alert">
            <span className="closebtn" onClick={onClose}>&times;</span>
            {message}
        </div>
    );
};

export default Alert;
