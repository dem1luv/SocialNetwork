import React from "react";
import {connect} from "react-redux";
import SidebarLeft from "./SidebarLeft";

const mapStateToProps = state => ({
    userId: state.currentUser.data.id,
    isLoggedIn: state.currentUser.isLoggedIn,
});

const mapDispatchToProps = () => ({});

let SidebarLeftContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarLeft);

export default SidebarLeftContainer;