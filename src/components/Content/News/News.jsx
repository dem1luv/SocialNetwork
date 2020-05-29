import React from "react";
import s from "./News.module.css";
import Post from "../../General/Post/Post";

function News(props) {

    return (
        <div>
            {props.posts.map((p) => <Post user={p.user} date={p.date} text={p.text} liked={p.liked} id={p.id}
                                          likesCount={p.likesCount} doLike={props.doLike} doUnlike={props.doUnlike}/>)}
        </div>
    );
}

export default News;