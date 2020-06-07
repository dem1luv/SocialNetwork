import React from "react";
import {connect} from "react-redux";
import SettingsContentProfile from "./SettingsContentProfile";
import {
    addIntroAC,
    addIntroUpdateFunctionAC,
    deleteIntroAC,
    removeAddedAndRemovedIntrosAC,
    restoreRemovedIntrosAC,
    setAvaAC, setBgAC,
    setCityAC,
    setCountryAC,
    setNameAC,
    updateIntrosAC,
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
    setBg: (currentUser, bgUrl) => {
        dispatch(setBgAC(currentUser, bgUrl));
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
    deleteIntro: id => {
        dispatch(deleteIntroAC(id));
    },
    addIntroUpdateFunction: (id, function_) => {
        dispatch(addIntroUpdateFunctionAC(id, function_));
    },
    updateIntros: () => {
        dispatch(updateIntrosAC());
    },
    removeAddedAndRemovedIntros: () => {
        dispatch(removeAddedAndRemovedIntrosAC());
    },
    restoreRemovedIntros: () => {
        dispatch(restoreRemovedIntrosAC());
    }
});

let SettingsContentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsContentProfile);

export default SettingsContentProfileContainer;