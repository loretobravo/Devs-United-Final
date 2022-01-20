import React, { useContext } from "react";
import MyFavs from '../Components/MyFavs';
import MyTweets from '../Components/MyTweets';
import {AppContext} from "../Context/AppContext";


const MyProfile = () => {
    const {tweets}= useContext(AppContext);

    
    return (
        <div>  
           
            <MyTweets/>  
            <MyFavs/>
            
         

        </div>
         
    )
}

export default MyProfile

