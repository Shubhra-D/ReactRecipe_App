import { u } from 'motion/react-client';
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


//Sign up function
 const signup = (formData)=>{
   const users = JSON.parse(localStorage.getItem("users")) || [];
  
   //check if email already in use
  const existingUser = users.find((u)=>u.email === formData.email);
  if(existingUser) {
    return {success:false , message : "User already exists!"}
  }

  // if not then save a new user
  const newUser = {name:formData.name , phone:formData.phone , email: formData.email , password : formData.password};
  users.push(newUser);
  localStorage.setItem("users",JSON.stringify(users));
  localStorage.setItem("user",JSON.stringify(newUser));
   setUser(newUser);

   return {success:true};
 }

  // Login function
 const login = (name,email,password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = users.find((u)=> u.name === name && u.email === email && u.password === password );
  
  if(foundUser){
    localStorage.setItem("user",JSON.stringify(foundUser));
    setUser(foundUser);
    return {success :true};
  }else{
    return {success:false , message:"Invalid Credential"};
  }
 
};

// Logout function
const logout = () => {
  localStorage.removeItem("user");
  setUser(null);
};
 
  return (
    <AuthContext.Provider value={{signup,login,user,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
export const useAuth = ()=>{
    return useContext(AuthContext)
}