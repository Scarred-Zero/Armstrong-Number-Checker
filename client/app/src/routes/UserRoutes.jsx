import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import UserProfile from "../features/user/profile/details/UserProfile";
import EditProfile from "../features/user/profile/edit/EditProfile";

const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="profile" element={<UserProfile />} />
                <Route path="profile/edit" element={<EditProfile />} />
            </Route>
        </Routes>
    );
};

export default UserRoutes;