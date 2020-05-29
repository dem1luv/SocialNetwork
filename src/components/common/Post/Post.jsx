import React from "react";
import s from "./Post.module.css";
import {NavLink} from "react-router-dom";
import likedHeart from "../../../assets/svg/likedHeart.svg";
import unlikedHeart from "../../../assets/svg/unlikedHeart.svg";

function Post(props) {

    const onDoLike = postId => {
        props.doLike(postId);
    }

    const onDoUnlike = postId => {
        props.doUnlike(postId);
    }

    return (
        <div className={s.item}>
            <div className={s.head}>
                <div className={s.ava}>
                    <NavLink to={`/profile/${props.user.id}`}><img src={props.user.avaUrl} alt=""/></NavLink>
                </div>
                <div className={s.nameDate}>
                    <div><NavLink to={`/profile/${props.user.id}`}>{props.user.name}</NavLink></div>
                    <div>{props.date}</div>
                </div>
            </div>
            <div className={s.text}>{props.text}</div>
            <div className={s.stat}>
                {props.liked ?
                <button onClick={() => {onDoUnlike(props.id)}}><img src={likedHeart} alt=""/></button> :
                <button onClick={() => {onDoLike(props.id)}}><img src={unlikedHeart} alt=""/></button>
                }
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;