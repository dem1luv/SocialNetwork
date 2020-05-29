import React from "react";
import {connect} from "react-redux";
import ProfileIntro from "./ProfileIntro";

const mapStateToProps = state => ({
    userIntro: state.profilePage.user.intro,
});

const mapDispatchToProps = dispatch => ({});

let ProfileIntroContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileIntro);

export default ProfileIntroContainer;