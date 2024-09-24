import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Current logged-in user
    const [registeredUsers, setRegisteredUsers] = useState([]); // Simulated registered users list
    const navigate = useNavigate(); // For navigation

    // Login function
    const login = async (email, password) => {
        const userFound = registeredUsers.find((u) => u.email === email && u.password === password);
        if (userFound) {
            setUser({ email, name: userFound.name }); // Set user with name
            navigate('/dashboard'); // Redirect to dashboard
        } else {
            alert('Please register first or check your credentials!'); // Alert if user is not found
        }
    };

    // Register function
    const register = async (email, password, name) => {
        const userExists = registeredUsers.some((u) => u.email === email);
        if (userExists) {
            alert('User already registered! Please login.'); // Prevent duplicate registration
        } else {
            const newUser = { email, password, name };
            setRegisteredUsers([...registeredUsers, newUser]); // Add new user to registered users list
            alert('Registration successful! Please log in.');
            navigate('/'); // Redirect to login page after registration
        }
    };

    // Logout function
    const logout = () => {
        setUser(null); // Clear current user
        navigate('/'); // Redirect to login page after logout
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
