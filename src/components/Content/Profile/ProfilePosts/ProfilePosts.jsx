import React from "react";
import s from "./ProfilePosts.module.css";

function ProfilePosts(props) {
    const onAddPost = () => {
        debugger;
        props.addPost(props.user, "1488");
    }

    return (
        <div>
            <div>
                <input type="text"/>
                <button onClick={onAddPost}>Post</button>
            </div>
            <div>
                {props.posts.map((p) =>
                    <div>
                        <div>
                            <img src="https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png" alt=""/>
                        </div>
                        <div>{p.text}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfilePosts;