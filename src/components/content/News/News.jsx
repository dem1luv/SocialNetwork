import React from "react";
import s from "./News.module.css";
import Post from "../../common/Post/Post";

class News extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.news}>
                {this.props.posts.map((p) => <Post post={p} doLike={this.props.doLike} doUnlike={this.props.doUnlike}/>)}
            </div>
        );
    }
}

export default News;