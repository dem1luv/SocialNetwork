const ADD_POST = "ADD-POST";
const DO_LIKE = "DO-LIKE";
const DO_UNLIKE = "DO-UNLIKE";

let initState = {
    posts: [
        {
        },
    ],
    user: {

    }
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 0,
                    text: action.text,
                    date: "27.05.2020 11:12",
                    liked: false,
                    likesCount: 0,
                }],
            }
        case DO_LIKE:
            return {
                ...state,
                posts: [...state.posts.map(p => {
                    if (p.id === action.postId) {
                        p.liked = true;
                    }
                })]
            }
        case DO_UNLIKE:
            return {
                ...state,
                posts: [...state.posts.map(p => {
                    if (p.id === action.postId) {
                        p.liked = false;
                    }
                })]
            }
        default:
            return state;
    }
}

export const addPostAC = (user, text) => ({
    type: ADD_POST,
    text: text,
});
export const doLikeAC = postId => ({
    type: DO_LIKE,
    postId: postId,
});
export const doUnlikeAC = postId => ({
   type: DO_UNLIKE,
    postId: postId,
});

export default profileReducer;