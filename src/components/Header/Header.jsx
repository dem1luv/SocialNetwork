import React from "react";
import s from "./Header.module.css";
import {Route} from "react-router-dom";

function Header() {
    return (
        <header className={s.header}>
            <img src="" alt=""/>
            <span>
                <Route path="/profile" render={() => "Profile"}/>
                <Route path="/music" render={() => "Music"}/>
                <Route path="/news" render={() => "News"}/>
                <Route path="/users" render={() => "Users"}/>
                <Route path="/messages" render={() => "Messages"}/>
                <Route path="/settings" render={() => "Settings"}/>
            </span>
        </header>
    );
}

export default Header;