import React from 'react';
import profileReducer from "./profileReducer";
import {combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
});

let store = createStore(reducers);

export default store;