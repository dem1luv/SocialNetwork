import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logOutAC} from "../../redux/headerReducer";

const mapStateToProps = state => ({
    user: state.header.currentUser,
});

const mapDispatchToProps = dispatch => ({
    logOut: () => {
        dispatch(logOutAC());
    }
});

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;