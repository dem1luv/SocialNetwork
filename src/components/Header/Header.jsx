import React from "react";
import s from "./Header.module.css";
import arrowDown from "../../assets/svg/arrowDown.svg";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.userMenuNavElement = React.createRef();
        this.props.getCurrentUser();
    }

    toggleUserMenuNav() {
        this.userMenuNavElement.current.style.display = this.userMenuNavElement.current.style.display === "block" ? "none" : "block";
    }

    render() {
        const photoUrl = this.props.user.photos.small
            ? this.props.user.photos.small
            : "https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png"

        return (
            <header className={s.header}>
                {this.props.user.isLoggedIn ? (
                    <button className={s.userMenu} onClick={this.toggleUserMenuNav.bind(this)}>
                        <img className={s.ava} src={photoUrl} alt=""/>
                        <span>{this.props.user.name}</span>
                        <img className={s.arrow} src={arrowDown} alt=""/>
                        <div className={s.userMenuNav} ref={this.userMenuNavElement}>
                            <NavLink to={`/profile/${this.props.user.id}`}>Profile</NavLink>
                            <NavLink to="/settings/profile">Settings</NavLink>
                            <button onClick={this.props.logOut}>Log Out</button>
                        </div>
                    </button> )
                    : <NavLink to={'/login'} className={s.logInLink}>Log In</NavLink>
                }
            </header>
        );
    }
}

export default Header;