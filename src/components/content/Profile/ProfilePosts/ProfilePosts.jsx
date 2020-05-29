import React from "react";
import s from "./ProfilePosts.module.css";
import Post from "../../../common/Post/Post";

function ProfilePosts(props) {

    const onAddPost = () => {
        props.addPost();
    }

    const onChangeInput = e => {
        props.changeInput(e.target.value);
    }

    const onDoLike = postId => {
        props.doLike(postId);
    }

    const onDoUnlike = postId => {
        props.doUnlike(postId);
    }

    return (
        <div>
            <div>
                <input type="text" value={props.inputText} onChange={onChangeInput}/>
                <button onClick={onAddPost}>Post</button>
            </div>
            <div>
                {props.posts.map((p) => <Post user={p.user} date={p.date} text={p.text} liked={p.liked} id={p.id}
                                              likesCount={p.likesCount} doLike={props.doLike} doUnlike={props.doUnlike}/>)}
            </div>
        </div>
    );
}

export default ProfilePosts;