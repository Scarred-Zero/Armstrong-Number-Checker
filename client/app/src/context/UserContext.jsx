import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { token, isAuthenticated } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUserUrlPrefix = import.meta.env.VITE_API_USER_URL_PREFIX;

  const fetchUser = async () => {
    if (!isAuthenticated || !token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(`${apiUserUrlPrefix}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.data);
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token, isAuthenticated]);

  return (
    <UserContext.Provider value={{ user, setUser, loading, refreshUser: fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};