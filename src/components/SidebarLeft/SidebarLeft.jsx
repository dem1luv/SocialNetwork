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
                    <NavLink to={this.props.isLoggedIn ? `/profile/${this.props.userId}` : `/login`}
                             activeClassName={this.props.isLoggedIn ? s.active : ''}
                    >Profile</NavLink>
                    <NavLink to={"/news"} activeClassName={s.active}>News</NavLink>
                    <NavLink to={this.props.isLoggedIn ? `/messages` : `/login`}
                             activeClassName={this.props.isLoggedIn ? s.active : ''}
                    >Messages</NavLink>
                    <NavLink to={"/music"} activeClassName={s.active}>Music</NavLink>
                    <NavLink to={"/users"} activeClassName={s.active}>Users</NavLink>
                    <NavLink to={this.props.isLoggedIn ? `/settings/profile` : `/login`}
                             activeClassName={this.props.isLoggedIn ? s.active : ''}
                    >Settings</NavLink>
                </nav>
            </aside>
        );
    }
}

export default SidebarLeft;