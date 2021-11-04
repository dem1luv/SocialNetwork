import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getCurrentUser, logOut} from "../../redux/currentUserReducer";

const mapStateToProps = state => ({
    user: state.currentUser,
});

let HeaderContainer = connect(mapStateToProps, {
    logOut, getCurrentUser
})(Header);

export default HeaderContainer;