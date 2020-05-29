import React from "react";
import s from "./ProfileInfo.module.css";
import {Route} from "react-router-dom";

function ProfileInfo() {
    return (
        <header className={s.header}>
            <img src="" alt=""/>
            <span>
                <Route path="/profile" render={() => "ProfileInfo"}/>
                <Route path="/music" render={() => "Music"}/>
                <Route path="/news" render={() => "News"}/>
                <Route path="/users" render={() => "Users"}/>
                <Route path="/messages" render={() => "Messages"}/>
                <Route path="/settings" render={() => "Settings"}/>
            </span>
        </header>
    );
}

export default ProfileInfo;