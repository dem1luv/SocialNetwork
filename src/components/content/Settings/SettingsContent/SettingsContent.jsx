import React from "react";
import s from "./SettingsContent.module.css";
import {Route} from "react-router-dom";
import SettingsContentProfileContainer from "./SettingsContentProfile/SettingsContentProfileContainer";
import SettingsContentGeneralContainer from "./SettingsContentGeneral/SettingsContentGeneralContainer";

class SettingsContent extends React.Component {
    render() {
        return (
            <div className={s.settingsContent}>
                <Route path="/settings/profile" render={() => <SettingsContentProfileContainer/>}/>
                <Route path="/settings/general" render={() => <SettingsContentGeneralContainer/>}/>
            </div>
        );
    }
}

export default SettingsContent;