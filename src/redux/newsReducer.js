const DO_LIKE = "DO-LIKE";
const DO_UNLIKE = "DO-UNLIKE";

let initState = {
    posts: [
        {
            id: 0,
            text: "Hey, people, here's my first post!",
            date: "28.05.2020, 17:25:09",
            liked: false,
            likesCount: 0,
            user: {
                id: 0,
                avaUrl: "https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg",
                name: "Dmitriy Demyanenko",
            }
        },
    ],
}

const newsReducer = (state = initState, action) => {
    switch (action.type) {
        case DO_LIKE:
            return {
                ...state,
                posts: [...state.posts.map(p => {
                    if (p.id === action.postId) {
                        p.liked = true;
                        p.likesCount++;
                    }
                    return p;
                })]
            }
        case DO_UNLIKE:
            return {
                ...state,
                posts: [...state.posts.map(p => {
                    if (p.id === action.postId) {
                        p.liked = false;
                        p.likesCount--;
                    }
                    return p;
                })]
            }
        default:
            return state;
    }
}

export const doLikeAC = postId => ({
    type: DO_LIKE,
    postId: postId,
});
export const doUnlikeAC = postId => ({
    type: DO_UNLIKE,
    postId: postId,
});

export default newsReducer;