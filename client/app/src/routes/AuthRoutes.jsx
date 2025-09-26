import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

function AuthRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="sign-in" element={<Login />} />
                <Route path="sign-up" element={<Register />} />
            </Route>
        </Routes>
    );
}

export default AuthRoutes;