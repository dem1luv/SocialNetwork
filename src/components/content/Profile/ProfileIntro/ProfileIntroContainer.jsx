import React from "react";
import {connect} from "react-redux";
import ProfileIntro from "./ProfileIntro";

class ProfileIntroContainer extends React.Component {
    render() {
        return <ProfileIntro {...this.props}/>
    }
}

const mapStateToProps = state => ({
    aboutMe: state.profilePage.userProfile.aboutMe,
    lookingForAJob: state.profilePage.userProfile.lookingForAJob,
    lookingForAJobDescription: state.profilePage.userProfile.lookingForAJobDescription,
    contacts: state.profilePage.userProfile.contacts
});

export default connect(mapStateToProps, {})(ProfileIntroContainer);