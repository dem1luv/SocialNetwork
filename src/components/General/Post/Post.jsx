import React from "react";
import s from "./Post.module.css";

function Post(props) {

    const onDoLike = postId => {
        props.doLike(postId);
    }

    const onDoUnlike = postId => {
        props.doUnlike(postId);
    }

    return (
        <div className={s.item}>
            <div className={s.ava}>
                <img src={props.user.avaUrl} alt=""/>
            </div>
            <div>{props.user.name}</div>
            <div>{props.date}</div>
            <div>{props.text}</div>
            <div>{props.liked ?
                <button onClick={() => {onDoUnlike(props.id)}}>{props.likesCount} Unlike</button> :
                <button onClick={() => {onDoLike(props.id)}}>{props.likesCount} Like</button>
            }</div>
        </div>
    );
}

export default Post;