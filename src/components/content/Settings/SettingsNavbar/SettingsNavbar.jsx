import React from "react";
import s from "./SettingsNavbar.module.css";
import {NavLink, Route} from "react-router-dom";

function SettingsNavbar() {
    return (
        <div className={s.settingsNavbar}>
            <h2>Settings</h2>
            <nav>
                <NavLink to="/settings/profile" activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/settings/general" activeClassName={s.active}>General</NavLink>
            </nav>
        </div>
    );
}

export default SettingsNavbar;