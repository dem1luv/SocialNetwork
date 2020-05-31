import React from "react";
import {connect} from "react-redux";
import SettingsContentGeneral from "./SettingsContentGeneral";

const mapStateToProps = state => ({
    currentUser: state.currentUser.user,
});

const mapDispatchToProps = dispatch => ({

});

let SettingsContentGeneralContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsContentGeneral);

export default SettingsContentGeneralContainer;