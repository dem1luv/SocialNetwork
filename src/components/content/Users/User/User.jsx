import React from 'react';
import s from "./User.module.css";

const User = props => {
    const photoUrl = props.photo ? props.photo : "https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png"
    let followButton;
    if (props.followed) {
        followButton = <button>Unfollow</button>
    } else {
        followButton = <button>Follow</button>
    }

    return (
        <div className={s.user}>
            <img src={photoUrl} alt=""/>
            <h4>{props.name}</h4>
            {followButton}
        </div>
    )
}

export default User;