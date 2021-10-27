import React from "react";
import s from "./Post.module.css";
import {NavLink} from "react-router-dom";
import likedHeart from "../../../assets/svg/likedHeart.svg";
import unlikedHeart from "../../../assets/svg/unlikedHeart.svg";

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    onDoLike() {
        this.props.doLike(this.props.post.id);
    }

    onDoUnlike() {
        this.props.doUnlike(this.props.post.id);
    }

    render() {
        return (
            <div className={s.item}>
                <div className={s.head}>
                    <div className={s.ava}>
                        <NavLink to={`/profile/${this.props.post.user.id}`}><img src={this.props.post.user.avaUrl} alt=""/></NavLink>
                    </div>
                    <div className={s.nameDate}>
                        <div><NavLink to={`/profile/${this.props.post.user.id}`}>{this.props.post.user.name}</NavLink></div>
                        <div>{this.props.post.date}</div>
                    </div>
                </div>
                <div className={s.text}>{this.props.post.text}</div>
                <div className={s.stat}>
                    {this.props.post.liked ?
                    <button onClick={() => {this.onDoUnlike()}}><img src={likedHeart} alt=""/></button> :
                    <button onClick={() => {this.onDoLike()}}><img src={unlikedHeart} alt=""/></button>
                    }
                    <span>{this.props.post.likesCount}</span>
                </div>
            </div>
        );
    }
}

export default Post;