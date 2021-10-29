import React from "react";
import s from "./ProfileIntro.module.css";

const ProfileIntro = props => {
    const contactsElements = []
    if (props.contacts) {
        Object.keys(props.contacts).forEach(k => {
            if (props.contacts[k] !== null) {
                contactsElements.push(<li>{k}: {props.contacts[k]}</li>)
            }
        });
    }

    return (
        <div className={s.profileIntro}>
            <h2>Profile Info</h2>
            {props.lookingForAJob ? (
                <div className={s.item}>
                    <h3>Looking for a job</h3>
                    <h4>{props.lookingForAJob}</h4>
                    <p>{props.lookingForAJobDescription}</p>
                </div>
            ) : null}
            {props.aboutMe ? (
                <div className={s.item}>
                    <h3>About me</h3>
                    <p>{props.aboutMe}</p>
                </div>) : null
            }
            {contactsElements.length > 0 ? (
                <div className={s.item}>
                    <h3>Contacts</h3>
                    <p><ul className={s.contacts}>
                        {contactsElements}
                    </ul></p>
                </div>
            ) : null}
            {!props.aboutMe && !props.lookingForAJob && contactsElements.length === 0 ? (
                <p className={s.noInfo}>There's no info 😔</p>
            ) : null }
        </div>
    );
}

export default ProfileIntro;