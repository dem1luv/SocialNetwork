import React from "react";
import {connect} from "react-redux";
import SettingsContent from "./SettingsContent";

const mapStateToProps = state => ({
    currentUser: state.currentUser.user,
});

const mapDispatchToProps = dispatch => ({

});

let SettingsContentContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsContent);

export default SettingsContentContainer;