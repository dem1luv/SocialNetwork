import React from "react";
import s from "./SidebarLeft.module.css";
import {NavLink} from "react-router-dom";

function SidebarLeft() {
    return (
        <aside className={s.aside}>
            <nav>
                <NavLink to={"/profile"}>Profile</NavLink>
                <NavLink to={"/news"}>News</NavLink>
                <NavLink to={"/messages"}>Messages</NavLink>
                <NavLink to={"/music"}>Music</NavLink>
                <NavLink to={"/users"}>Users</NavLink>
                <NavLink to={"/settings"}>Settings</NavLink>
            </nav>
        </aside>
    );
}

export default SidebarLeft;