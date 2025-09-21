import React, { createContext, useState } from 'react';

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        setAlert({ type, message });
    };

    const closeAlert = () => {
        setAlert(null);
    };

    return (
        <AlertContext.Provider value={{ alert, showAlert, closeAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

export { AlertContext, AlertProvider };
