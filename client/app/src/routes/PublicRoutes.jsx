import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../features/public/home/Home";
import Contact from "../features/public/contact/Contact";
import UserProfile from "../features/user/profile/UserProfile";
import ScrollUp from '../components/scrollUp/ScrollUp';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="profile" element={<UserProfile />} />
            </Route>
            <ScrollUp />

        </Routes>
    );
};

export default PublicRoutes;