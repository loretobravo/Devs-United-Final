import React, {useContext } from "react";
import {  Link } from "react-router-dom";
import {AppContext} from "../Context/AppContext";
import "./navbar.css"

const NavBar = () => {

    const {user}= useContext(AppContext);

    return (
        <nav className="navbar">
            <Link to="/MyProfile"><img className="user_picture" src={user.photoURL} alt="" /></Link>
            <img className="logonav"src="./svgs/logo small.svg"/>
            <img className=""src="./svgs/title.svg"/>   
        </nav>
    )
}

export default NavBar
