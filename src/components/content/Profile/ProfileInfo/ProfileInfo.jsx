import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.profileInfo}>
                <div className={s.background}>
                    <img src={this.props.user.bgUrl} alt=""/>
                </div>
                <div className={s.ava}>
                    <img src={this.props.user.avaUrl} alt=""/>
                </div>
                <div className={s.name}>{this.props.user.name}</div>
                <div className={s.location}>{this.props.user.country}, {this.props.user.city}</div>
            </div>
        );
    }
}

export default ProfileInfo;