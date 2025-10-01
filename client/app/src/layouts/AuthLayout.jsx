import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";

const AuthLayout = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
};

export default AuthLayout;