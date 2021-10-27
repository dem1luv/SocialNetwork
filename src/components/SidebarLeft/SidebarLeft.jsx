import React from "react";
import s from "./SidebarLeft.module.css";
import {NavLink} from "react-router-dom";

class SidebarLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className={s.aside}>
                <nav>
                    <NavLink to={`/profile/${this.props.userId}`} activeClassName={s.active}>Profile</NavLink>
                    <NavLink to={"/news"} activeClassName={s.active}>News</NavLink>
                    <NavLink to={"/messages"} activeClassName={s.active}>Messages</NavLink>
                    <NavLink to={"/music"} activeClassName={s.active}>Music</NavLink>
                    <NavLink to={"/users"} activeClassName={s.active}>Users</NavLink>
                    <NavLink to={"/settings/profile"} activeClassName={s.active}>Settings</NavLink>
                </nav>
            </aside>
        );
    }
}

export default SidebarLeft;