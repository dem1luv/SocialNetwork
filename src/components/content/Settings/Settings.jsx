import React from "react";
import s from "./Settings.module.css";
import SettingsNavbar from "./SettingsNavbar/SettingsNavbar";
import SettingsContentContainer from "./SettingsContent/SettingsContentContainer";

class Settings extends React.Component {
    render() {
        return (
            <div className={s.settings}>
                <SettingsContentContainer/>
                <SettingsNavbar/>
            </div>
        );
    }
}

export default Settings;