import React from "react";
import s from "./Header.module.css";
import arrowDown from "../../assets/svg/arrowDown.svg";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.userMenuNavElement = React.createRef();
    }

    toggleUserMenuNav() {
        this.userMenuNavElement.current.style.display = this.userMenuNavElement.current.style.display === "block" ? "none" : "block";
    }

    render() {
        return (
            <header className={s.header}>
                <button className={s.userMenu} onClick={this.toggleUserMenuNav.bind(this)}>
                    <img className={s.ava} src={this.props.user.avaUrl} alt=""/>
                    <span>{this.props.user.name}</span>
                    <img className={s.arrow} src={arrowDown} alt=""/>
                    <div className={s.userMenuNav} ref={this.userMenuNavElement}>
                        <NavLink to={`/profile/${this.props.user.id}`}>Profile</NavLink>
                        <NavLink to="/settings/profile">Settings</NavLink>
                        <button onClick={this.props.logOut}>Log Out</button>
                    </div>
                </button>
            </header>
        );
    }
}

export default Header;