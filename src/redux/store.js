import React from 'react';
import profileReducer from "./profileReducer";
import {combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import currentUserReducer from "./currentUserReducer";
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
    currentUser: currentUserReducer,
    header: headerReducer,
});

let store = createStore(reducers);

export default store;