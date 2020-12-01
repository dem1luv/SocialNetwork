import React from "react";
import {connect} from "react-redux";
import SettingsContentProfile from "./SettingsContentProfile";
import {
    addIntroAC,
    deleteIntroAC, resetChangesAC,
    changeAvaAC, changeBgAC,
    changeCityAC,
    changeCountryAC,
    changeNameAC, saveChangesAC, changeIntroTitleAC, changeIntroTextAC,
} from "../../../../../redux/currentUserReducer";

const mapStateToProps = state => ({
    currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
    changeName: (currentUser, name) => {
        dispatch(changeNameAC(currentUser, name));
    },
    changeAva: (currentUser, avaUrl) => {
        dispatch(changeAvaAC(currentUser, avaUrl));
    },
    changeBg: (currentUser, bgUrl) => {
        dispatch(changeBgAC(currentUser, bgUrl));
    },
    changeCity: (currentUser, city) => {
        dispatch(changeCityAC(currentUser, city));
    },
    changeCountry: (currentUser, country) => {
        dispatch(changeCountryAC(currentUser, country));
    },
    addIntro: () => {
        dispatch(addIntroAC());
    },
    changeIntroTitle: (introId, title) => {
        dispatch(changeIntroTitleAC(introId, title));
    },
    changeIntroText: (introId, text) => {
        dispatch(changeIntroTextAC(introId, text));
    },
    deleteIntro: id => {
        dispatch(deleteIntroAC(id));
    },
    saveChanges: () => {
        dispatch(saveChangesAC());
    },
    resetChanges: () => {
        dispatch(resetChangesAC());
    },
});

let SettingsContentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsContentProfile);

export default SettingsContentProfileContainer;