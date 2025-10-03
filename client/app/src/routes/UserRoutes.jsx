import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import UserProfile from "../features/user/profile/UserProfile";
import EditProfile from "../features/user/profile/EditProfile";
import DeleteProfile from "../features/user/profile/DeleteProfile";

const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="profile" element={<UserProfile />} />
                <Route path="profile/edit" element={<EditProfile />} />
                <Route path="profile/delete" element={<DeleteProfile />} />
            </Route>
        </Routes>
    );
};

export default UserRoutes;