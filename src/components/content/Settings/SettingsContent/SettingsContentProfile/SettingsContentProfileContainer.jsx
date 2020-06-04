import React from "react";
import {connect} from "react-redux";
import SettingsContentProfile from "./SettingsContentProfile";
import {
    addIntroAC, deleteIntroAC,
    setAvaAC,
    setCityAC,
    setCountryAC,
    setIntroAC,
    setNameAC,
} from "../../../../../redux/currentUserReducer";

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
    addIntro: () => {
        dispatch(addIntroAC());
    },
    setIntro: (id, title, text) => {
        dispatch(setIntroAC(id, title, text));
    },
    deleteIntro: id => {
        dispatch(deleteIntroAC(id));
    },
});

let SettingsContentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsContentProfile);

export default SettingsContentProfileContainer;