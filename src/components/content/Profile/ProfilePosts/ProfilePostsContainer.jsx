import React from "react";
import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";
import {addPostAC, changeInputAC, doLikeAC, doUnlikeAC} from "../../../../redux/profileReducer";
import currentUserReducer from "../../../../redux/currentUserReducer";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    inputText: state.profilePage.inputText,
    currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    addPost: currentUser => {
        dispatch(addPostAC(currentUser));
    },
    changeInput: (text, scrollHeight) => {
        dispatch(changeInputAC(text, scrollHeight));
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