import React from "react";
import s from "./ProfilePosts.module.css";
import Post from "../../../common/Post/Post";

function ProfilePosts(props) {

    let textareaElement = React.createRef();

    const onAddPost = () => {
        textareaElement.current.style.height = "33px";
        props.addPost();
    }

    const onChangeInput = e => {
        e.target.style.height = "33px";
        e.target.style.height = (e.target.scrollHeight) + "px";
        props.changeInput(e.target.value);
    }

    return (
        <div className={s.profilePosts}>
            <div className={s.addPostContainer}>
                <img src={props.currentUser.avaUrl} alt=""/>
                <textarea type="text" value={props.inputText} onChange={onChangeInput} placeholder="Hey, what's up?"
                          ref={textareaElement}/>
                <button onClick={onAddPost}>Post</button>
            </div>
            <div className={s.postsContainer}>
                {props.posts.map((p) => <Post user={p.user} date={p.date} text={p.text} liked={p.liked} id={p.id}
                                              likesCount={p.likesCount} doLike={props.doLike}
                                              doUnlike={props.doUnlike}/>)}
            </div>
        </div>
    );
}

export default ProfilePosts;