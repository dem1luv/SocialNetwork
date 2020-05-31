import React from "react";
import s from "./SettingsContentGeneral.module.css";
import {Route} from "react-router-dom";

function SettingsContentGeneral() {
    return (
        <div className={s.settingsContent}>
            <img src="" alt=""/>
            <span>
                <Route path="/settings/profile" render={() => "Profile"}/>
                <Route path="/settings/general" render={() => "SettingsContentGeneral"}/>
            </span>
        </div>
    );
}

export default SettingsContentGeneral;