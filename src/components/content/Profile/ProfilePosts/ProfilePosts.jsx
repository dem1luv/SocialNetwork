import React from "react";
import s from "./ProfilePosts.module.css";
import Post from "../../../common/Post/Post";

class ProfilePosts extends React.Component {
    constructor(props) {
        super(props);
        this.textareaElement = React.createRef();
    }

    onAddPost() {
        this.textareaElement.current.style.height = "33px";
        this.props.addPost(this.props.currentUser);
    }
    onChangeInput(e) {
        e.target.style.height = "33px";
        e.target.style.height = (e.target.scrollHeight) + "px";
        this.props.changeInput(e.target.value);
    }

    render() {
        return (
            <div className={s.profilePosts}>
                <div className={s.addPostContainer}>
                    <img src={this.props.currentUser.avaUrl} alt=""/>
                    <textarea type="text" value={this.props.inputText} onChange={this.onChangeInput.bind(this)} placeholder="Hey, what's up?"
                              ref={this.textareaElement}/>
                    <button onClick={this.onAddPost.bind(this)}>Post</button>
                </div>
                <div className={s.postsContainer}>
                    {this.props.posts.map((p) => <Post key={p.id} post={p} doLike={this.props.doLike}
                                                  doUnlike={this.props.doUnlike}/>)}
                </div>
            </div>
        );
    }
}

export default ProfilePosts;