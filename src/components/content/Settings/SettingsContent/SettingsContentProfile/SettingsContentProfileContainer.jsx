import React from "react";
import {connect} from "react-redux";
import SettingsContentProfile from "./SettingsContentProfile";

const mapStateToProps = state => ({
    currentUser: state.currentUser.user,
});

const mapDispatchToProps = dispatch => ({

});

let SettingsContentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsContentProfile);

export default SettingsContentProfileContainer;