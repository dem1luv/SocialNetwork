import React from "react";
import s from "./News.module.css";

function News(props) {
debugger;
    const onDoLike = postId => {
        props.doLike(postId);
    }

    const onDoUnlike = postId => {
        props.doUnlike(postId);
    }

    return (
        <div>
            {props.posts.map((p) =>
                <div className={s.item}>
                    <div className={s.ava}>
                        <img src={p.user.avaUrl} alt=""/>
                    </div>
                    <div>{p.user.name}</div>
                    <div>{p.date}</div>
                    <div>{p.text}</div>
                    <div>{p.liked ?
                        <button onClick={() => {onDoUnlike(p.id)}}>{p.likesCount} Unlike</button> :
                        <button onClick={() => {onDoLike(p.id)}}>{p.likesCount} Like</button>
                    }</div>
                </div>
            )}
        </div>
    );
}

export default News;