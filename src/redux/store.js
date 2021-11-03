import React from 'react';
import profileReducer from "./profileReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import currentUserReducer from "./currentUserReducer";
import usersReducer from "./usersReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
    currentUser: currentUserReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store

export default store;