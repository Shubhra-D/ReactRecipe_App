import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();



const AuthProvider = ({children}) => {
 const [user,setUser] = useState(null);
 useEffect(()=>{
  const storedUser = localStorage.getItem("user");
  if(storedUser){
    setUser(JSON.parse(storedUser))
  }
 },[])

 // Login function
 const login = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
  setUser(userData);
 
};

// Logout function
const logout = () => {
  localStorage.removeItem("user");
  setUser(null);
};
 
  return (
    <AuthContext.Provider value={{login,user,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
export const useAuth = ()=>{
    return useContext(AuthContext)
}