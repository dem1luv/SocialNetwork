import React from "react";
import s from "./ProfileIntro.module.css";

function ProfileIntro(props) {
    return (
        <div className={s.profileIntro}>
            <h2>Profile Intro</h2>
            {props.userIntro.map(i => (
                <div className={s.item}>
                    <h3>{i.title}</h3>
                    <p>{i.text}</p>
                </div>
            ))}
        </div>
    );
}

export default ProfileIntro;