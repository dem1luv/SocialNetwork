import React from "react";
import {connect} from "react-redux";
import News from "./News";
import {doLikeAC, doUnlikeAC} from "../../../redux/newsReducer";

const mapStateToProps = (state) => ({
    posts: state.newsPage.posts,
});

const mapDispatchToProps = (dispatch) => ({
    doLike: postId => {
        dispatch(doLikeAC(postId))
    },
    doUnlike: postId => {
        dispatch(doUnlikeAC(postId))
    },
});

let NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;