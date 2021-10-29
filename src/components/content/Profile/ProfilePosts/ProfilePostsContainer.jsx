import React from "react";
import ProfilePosts from "./ProfilePosts";
import {addPost, changeInput, doLike, doUnlike} from "../../../../redux/profileReducer";
import {connect} from "react-redux";

class ProfilePostsContainer extends React.Component {
    onAddPost() {
        this.props.addPost(this.props.currentUser);
    }

    onChangeInput = this.props.changeInput;

    onDoUnlike = this.props.doUnlike;

    onDoLike = this.props.doLike;

    render() {
        return <ProfilePosts
            textInput={this.props.textInput}
            posts={this.props.posts}
            currentUser={this.props.currentUser}
            onAddPost={this.onAddPost.bind(this)}
            onChangeInput={this.onChangeInput.bind(this)}
            onDoUnlike={this.onDoUnlike.bind(this)}
            onDoLike={this.onDoLike.bind(this)}
        />
    }
}

const mapStateToProps = state => ({
    textInput: state.profilePage.textInput,
    posts: state.profilePage.posts,
    currentUser: state.currentUser
});

export default connect(mapStateToProps, {
    addPost, changeInput, doLike, doUnlike
})(ProfilePostsContainer);