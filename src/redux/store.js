import React from 'react';
import profileReducer from "./profileReducer";
import {combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import currentUserReducer from "./currentUserReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
    currentUser: currentUserReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;