import React from 'react';
import profileReducer from "./profileReducer";
import {combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import sidebarLeftReducer from "./sidebarLeftReducer";
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
    sidebarLeft: sidebarLeftReducer,
    header: headerReducer,
});

let store = createStore(reducers);

export default store;