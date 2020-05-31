import React from "react";
import s from "./Settings.module.css";
import SettingsNavbar from "./SettingsNavbar/SettingsNavbar";
import SettingsContentContainer from "./SettingsContent/SettingsContentContainer";

function Settings() {
    return (
        <div className={s.settings}>
            <SettingsContentContainer/>
            <SettingsNavbar/>
        </div>
    );
}

export default Settings;