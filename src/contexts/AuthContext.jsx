import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types"; // Add this line
import authService from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authService
        .fetchUser(token)
        .then((userData) => {
          setUser({
            user_id: 4,
            username: "tes",
            email: "tes@g.co",
            profile_picture_path: null,
            id_card_picture_path: null,
            created_at: "2024-07-15T04:45:12.000000Z",
            updated_at: "2024-07-15T04:45:12.000000Z",
          });
          setLoading(false);
        })
        .catch(() => {
          authService.logout();
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const register = async (username, email, password) => {
    const data = await authService.register(username, email, password);
    localStorage.setItem("token", data.access_token);
    setUser(data.user);
  };

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    localStorage.setItem("token", data.access_token);
    setUser(data.user);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Add 'children' to props validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
