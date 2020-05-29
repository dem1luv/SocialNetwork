import React from "react";
import s from "./ProfileInfo.module.css";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";

const mapStateToProps = state => ({
    user: state.profilePage.user,
});

const mapDispatchToProps = dispatch => ({});

let ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;