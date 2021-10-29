import React from "react";
import s from "./Profile.module.css";
import Preloader from "../../common/Preolader/Preloader";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import ProfileIntroContainer from "./ProfileIntro/ProfileIntroContainer";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";

const Profile = props => {
    return (
        <div className={s.profile}>
            {props.isFetching ? <Preloader/> : (<>
                <ProfileInfoContainer/>
                <ProfileIntroContainer/>
                <ProfilePostsContainer/>
            </>)}
        </div>
    );
}

export default Profile;