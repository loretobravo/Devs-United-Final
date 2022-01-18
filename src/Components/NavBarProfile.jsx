import React, { useContext } from "react";
import {  Link } from "react-router-dom";
import { logout} from '../Firebase';
import {AppContext} from "../Context/AppContext";
import "./navbarprofile.css"

const NavBarProfile = () => {

    const {user}= useContext(AppContext);

    return (
        <header>
        <nav className="navprofile">
            <Link to="/Home"><img className="back" src="./svgs/back.svg" alt="back" /></Link><span className="user">{user.displayName}</span>
            <Link to="/"><img className="logout" src="./svgs/logout.svg" alt="logout" onClick={logout} /></Link>
            
        </nav>
        <div className="bigprofile">
            <img className="userpicture" src={user.photoURL} alt="" />
            <div className="autorname">{user.displayName}</div>
            </div>
            <div className="postfavs">
            <Link to="/MyTweets"><button className="posts">post</button></Link>
                <Link to="/MyFavs"><button className="favs">favorites</button></Link>
            </div>
            
        </header>
    )
}

export default NavBarProfile
