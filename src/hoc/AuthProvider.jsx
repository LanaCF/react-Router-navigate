import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const signin = (newUser, callback) => {
        setUser(newUser);
        callback();
    };

    const signout = (callback) => {
        setUser(null);
        // callback();
        navigate('/login');
    };

    const value = { user, signin, signout };

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;