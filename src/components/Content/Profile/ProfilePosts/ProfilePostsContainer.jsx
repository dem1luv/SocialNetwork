import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";
import {addPostAC} from "../../../../redux/profileReducer";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    user: state.profilePage.user,
});

const mapDispatchToProps = (dispatch) => ({
    addPost: (user, text) => {
        dispatch(addPostAC(user, text))
    },
});

let ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer;