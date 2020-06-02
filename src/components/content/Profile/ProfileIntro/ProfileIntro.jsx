import React from "react";
import s from "./ProfileIntro.module.css";

class ProfileIntro extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.profileIntro}>
                <h2>Profile Intro</h2>
                {this.props.userIntro.map(i => (
                    <div className={s.item}>
                        <h3>{i.title}</h3>
                        <p>{i.text}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProfileIntro;