const ADD_POST = "ADD-POST";
const CHANGE_INPUT = "CHANGE-INPUT";
const DO_LIKE = "DO-LIKE";
const DO_UNLIKE = "DO-UNLIKE";

let initState = {
    posts: [
        {id: 0, text: "1488", date: "28.05.2020, 17:25:09", liked: false, likesCount: 0,},
    ],
    inputText: "",
    user: {id: 0, avaUrl: "https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg", name: "Dmytry Demjanenko",},
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{
                    id: state.posts.length,
                    text: state.inputText,
                    date: new Date().toLocaleString(),
                    liked: false,
                    likesCount: 0,
                }, ...state.posts,],
                inputText: "",
            }
        case CHANGE_INPUT:
            return {
                ...state,
                inputText: action.text,
            }
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

export const addPostAC = () => ({
    type: ADD_POST,
});
export const changeInputAC = text => ({
    type: CHANGE_INPUT,
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