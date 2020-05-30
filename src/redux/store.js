import React from 'react';
import profileReducer from "./profileReducer";
import {combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import sidebarLeftReducer from "./sidebarLeftReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
    sidebarLeft: sidebarLeftReducer,
});

let store = createStore(reducers);

export default store;