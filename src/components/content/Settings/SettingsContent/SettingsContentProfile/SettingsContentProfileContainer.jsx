import React from "react";
import {connect} from "react-redux";
import SettingsContentProfile from "./SettingsContentProfile";
import {setAvaAC, setCityAC, setCountryAC, setNameAC} from "../../../../../redux/currentUserReducer";

const mapStateToProps = state => ({
    currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
    setName: (currentUser, name) => {
        dispatch(setNameAC(currentUser, name));
    },
    setAva: (currentUser, avaUrl) => {
        dispatch(setAvaAC(currentUser, avaUrl));
    },
    setCity: (currentUser, city) => {
        dispatch(setCityAC(currentUser, city));
    },
    setCountry: (currentUser, country) => {
        dispatch(setCountryAC(currentUser, country));
    },
});

let SettingsContentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsContentProfile);

export default SettingsContentProfileContainer;