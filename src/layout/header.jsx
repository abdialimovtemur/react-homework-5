import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="box">
                    <NavLink to={'/user'}>User</NavLink>
                    <NavLink to={'/profile'}>Profile</NavLink>
                    <NavLink to={'/'}>Home</NavLink>
                </div>
            </div>
        </div>
    )
}