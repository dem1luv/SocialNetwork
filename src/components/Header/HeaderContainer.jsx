import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logOutAC} from "../../redux/currentUserReducer";

const mapStateToProps = state => ({
    user: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
    logOut: () => {
        dispatch(logOutAC());
    }
});

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;