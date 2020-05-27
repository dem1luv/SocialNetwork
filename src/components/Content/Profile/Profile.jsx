import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <ProfilePostsContainer/>
        </div>
    );
}

export default Profile;