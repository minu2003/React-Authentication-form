import { createContext, useContext, useState } from "react";

const Authcontext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const [message , setMessage] = useState(null);

    //login process
    const login = (username, password) =>{
        if (username && password){
            setIsAuthenticated(true);
            setMessage("Login successfull !");
            return true;
        }
        else{
            setMessage("Invalid credentials. Please try again.");
            return false;
        }
    };
    //register process
    const register = (username, password) => {
        if(username && password){
            setMessage("Registration successful! Please login.");
            return true;
        }
        else{
            setMessage("Registration failed. Please try again.");
            return false;
        }
    };
    //logout function
    const logout = () =>{
        setIsAuthenticated(false);
        setMessage("You have Logged Out.");
    }
    return(
        <Authcontext.Provider value={{isAuthenticated, login, register, logout, message}}>
            {children}
        </Authcontext.Provider>
    );
}
export const useAuth = () => useContext(Authcontext);