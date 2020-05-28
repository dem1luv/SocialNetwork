import React from "react";
import s from "./ProfilePosts.module.css";

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
                {props.posts.map((p) =>
                    <div className={s.item}>
                        <div className={s.ava}>
                            <img src={props.user.avaUrl} alt=""/>
                        </div>
                        <div>{props.user.name}</div>
                        <div>{p.date}</div>
                        <div>{p.text}</div>
                        <div>{p.liked ?
                            <button onClick={() => {onDoUnlike(p.id)}}>{p.likesCount} Unlike</button> :
                            <button onClick={() => {onDoLike(p.id)}}>{p.likesCount} Like</button>
                            }</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfilePosts;