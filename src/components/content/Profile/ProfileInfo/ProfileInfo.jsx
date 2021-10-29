import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = props => {
    const photoUrl = props.largePhoto ? props.largePhoto : "https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png"

    return (
        <div className={s.profileInfo}>
            <div className={s.background} style={ {"backgroundImage": "url(" + photoUrl + ")"} }>
                <div></div>
            </div>
            <div className={s.ava}>
                <img src={photoUrl} alt=""/>
            </div>
            <div className={s.name}>{props.fullName}</div>
        </div>
    );
}

export default ProfileInfo;