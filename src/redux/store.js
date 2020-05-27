import React from 'react';
import profileReducer from "./profileReducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
});

let store = createStore(reducers);

export default store;