import React from "react";
import s from "./ProfilePosts.module.css";
import Post from "../../../common/Post/Post";

class ProfilePosts extends React.Component {
    constructor(props) {
        super(props);
        this.textareaElement = React.createRef();
    }

    componentDidMount() {
        if (this.textareaElement.current) {
            this.textareaElement.current.style.height = "33px";
            this.textareaElement.current.style.height = (this.textareaElement.current.scrollHeight) + "px";
        }
    }

    onAddPost() {
        this.textareaElement.current.style.height = "33px";
        this.props.onAddPost();
    }

    onChangeInput(e) {
        e.target.style.height = "33px";
        e.target.style.height = (e.target.scrollHeight) + "px";
        this.props.onChangeInput(e.target.value);
    }

    render() {
        const photoUrl = this.props.currentUser.photos.small
            ? this.props.currentUser.photos.small
            : "https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png"

        return (
            <div className={s.profilePosts}>
                {this.props.currentUser.isLoggedIn ? (
                    <div className={s.addPostContainer}>
                        <img src={photoUrl} alt=""/>
                        <textarea type="text" value={this.props.textInput} onChange={this.onChangeInput.bind(this)}
                                  placeholder="Hey, what's up?"
                                  ref={this.textareaElement}/>
                        <button onClick={this.onAddPost.bind(this)}>Post</button>
                    </div> )
                    : null
                }
                <div className={s.postsContainer}>
                    {this.props.posts.map((p) => <Post key={p.id} post={p} onDoLike={this.props.onDoLike}
                                                       onDoUnlike={this.props.onDoUnlike}
                                                       isLoggedIn={this.props.currentUser.isLoggedIn}/>)}
                </div>
            </div>
        );
    }
}

export default ProfilePosts;