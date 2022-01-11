import React, { createContext, useState } from "react";


export const AppContext = createContext();

export const AppProvider = (props) => {

 
  const [ user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
 

  
  return (
    <AppContext.Provider value={{ 
      user, 
      setUser,
       tweets, 
       setTweets, 
       }}>
      {props.children}
    </AppContext.Provider>
  );
};