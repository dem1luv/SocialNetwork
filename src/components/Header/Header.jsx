import React from "react";
import s from "./Header.module.css";
import arrowDown from "../../assets/svg/arrowDown.svg";
import {NavLink} from "react-router-dom";

function Header(props) {

    let userMenuNavElement = React.createRef();

    const toggleUserMenuNav = () => {
        userMenuNavElement.current.style.display = userMenuNavElement.current.style.display === "block" ? "none" : "block";
    }

    return (
        <header className={s.header}>
            <button className={s.userMenu} onClick={toggleUserMenuNav}>
                <img className={s.ava} src={props.user.avaUrl} alt=""/>
                <span>{props.user.name}</span>
                <img className={s.arrow} src={arrowDown} alt=""/>
                <div className={s.userMenuNav} ref={userMenuNavElement}>
                    <NavLink to={`/profile/${props.user.id}`}>Profile</NavLink>
                    <NavLink to="/settings/profile">Settings</NavLink>
                    <button onClick={props.logOut}>Log Out</button>
                </div>
            </button>
        </header>
    );
}

export default Header;