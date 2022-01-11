import React, {useContext, useEffect} from "react";
import { Navigate, Link } from "react-router-dom";
import { auth,loginGoogle,logout} from '../Firebase';
import {AppContext} from "../Context/AppContext";


const GoogleLogin = () => {
    const {user,setUser}= useContext(AppContext);
    
   useEffect(() => {
  
       auth.onAuthStateChanged((user)=>{
           setUser(user);
               });
              //  console.log(user)
            },[]);
    return (
        <div>
            {user ? (
        
          <div>
            <img src={user.photoURL} alt="" />
            <p>¡Hola {user.displayName}!</p>
            {/* <button onClick={logout}>Log out</button> */}
          </div>
        
      ) : (
        <button  onClick={loginGoogle}>
          Login con google
        </button>
      )}
        </div>
    );
};
export default GoogleLogin;