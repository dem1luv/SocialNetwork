import React from "react";
import s from "./ProfileInfo.module.css";

function ProfileInfo(props) {
    return (
        <div className={s.profileInfo}>
            <div className={s.background}>
                <img src={props.user.bgUrl} alt=""/>
            </div>
            <div className={s.ava}>
                <img src={props.user.avaUrl} alt=""/>
            </div>
            <div className={s.name}>{props.user.name}</div>
            <div className={s.location}>{props.user.country}, {props.user.city}</div>
        </div>
    );
}

export default ProfileInfo;