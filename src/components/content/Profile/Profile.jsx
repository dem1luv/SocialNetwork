import React from "react";
import s from "./Profile.module.css";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import ProfileIntroContainer from "./ProfileIntro/ProfileIntroContainer";

function Profile() {
    return (
        <div className={s.profile}>
            <ProfileInfoContainer/>
            <ProfileIntroContainer/>
            <ProfilePostsContainer/>
        </div>
    );
}

export default Profile;