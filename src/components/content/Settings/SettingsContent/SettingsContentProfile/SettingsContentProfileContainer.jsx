import React from "react";
import {connect} from "react-redux";
import SettingsContentProfile from "./SettingsContentProfile";
import {
    addIntroAC, deleteIntroAC, saveChangesAC,
    setAvaAC,
    setCityAC,
    setCountryAC,
    setIntroAC,
    setNameAC, updateTextInputs
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
    addIntro: (title, text) => {
        dispatch(addIntroAC(title, text));
    },
    setIntro: (id, title, text) => {
        dispatch(setIntroAC(id, title, text));
    },
    deleteIntro: id => {
        dispatch(deleteIntroAC(id));
    },
    saveChanges: () => {
        dispatch(saveChangesAC());
    },
    updateTextInputs: () => {
        dispatch(updateTextInputs());
    },
});

let SettingsContentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsContentProfile);

export default SettingsContentProfileContainer;