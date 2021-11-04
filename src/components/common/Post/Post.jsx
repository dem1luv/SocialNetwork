import React from "react";
import s from "./Post.module.css";
import {NavLink} from "react-router-dom";
import likedHeart from "../../../assets/svg/likedHeart.svg";
import unlikedHeart from "../../../assets/svg/unlikedHeart.svg";

const Post = props => {
    const photoUrl = props.post.user.photos.small
        ? props.post.user.photos.small
        : "https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png"

    return (
        <div className={s.item}>
            <div className={s.head}>
                <div className={s.ava}>
                    <NavLink to={`/profile/${props.post.user.id}`}><img src={photoUrl} alt=""/></NavLink>
                </div>
                <div className={s.nameDate}>
                    <div><NavLink to={`/profile/${props.post.user.id}`}>{props.post.user.name}</NavLink></div>
                    <div>{props.post.date}</div>
                </div>
            </div>
            <div className={s.text}>{props.post.text}</div>
            <div className={s.stat}>
                {props.isLoggedIn ? <>
                    {props.post.liked ?
                        <button onClick={() => {
                            props.onDoUnlike(props.post.id)
                        }}><img src={likedHeart} alt=""/></button> :
                        <button onClick={() => {
                            props.onDoLike(props.post.id)
                        }}><img src={unlikedHeart} alt=""/></button>
                    } </>
                    : <NavLink to={'/login'}><img src={unlikedHeart} alt=""/></NavLink>
                }
                <span>{props.post.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;