import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";
import {addPostAC, changeInputAC, doLikeAC, doUnlikeAC} from "../../../../redux/profileReducer";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    inputText: state.profilePage.inputText,
    user: state.profilePage.user,
});

const mapDispatchToProps = (dispatch) => ({
    addPost: () => {
        dispatch(addPostAC());
    },
    changeInput: text => {
        dispatch(changeInputAC(text));
    },
    doLike: postId => {
        dispatch(doLikeAC(postId))
    },
    doUnlike: postId => {
        dispatch(doUnlikeAC(postId))
    },
});

let ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer;