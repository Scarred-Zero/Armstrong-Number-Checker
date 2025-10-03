import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import ScrollUp from '../components/scrollUp/ScrollUp';

const UserLayout = () => {
    return (
        <>
            <Header />

                <Outlet />
            <ScrollUp />
            <Footer />
        </>
    );
};

export default UserLayout;