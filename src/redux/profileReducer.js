const ADD_POST = "ADD-POST";
const CHANGE_INPUT = "CHANGE-INPUT";
const DO_LIKE = "DO-LIKE";
const DO_UNLIKE = "DO-UNLIKE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

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
            },
        },
    ],
    textInput: "",
    userProfile: {},
    isFetching: true,
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{
                    id: state.posts.length === 0 ? 0 : state.posts[0].id + 1,
                    text: state.textInput,
                    date: new Date().toLocaleString(),
                    liked: false,
                    likesCount: 0,
                    user: {...action.currentUser},
                }, ...state.posts,],
                textInput: "",
            }
        case CHANGE_INPUT:
            return {
                ...state,
                textInput: action.text,
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
        case SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile}
        case TOGGLE_FETCHING:
            debugger
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const addPost = currentUser => ({
    type: ADD_POST,
    currentUser: currentUser,
});
export const changeInput = text => ({
    type: CHANGE_INPUT,
    text: text,
});
export const doLike = postId => ({
    type: DO_LIKE,
    postId: postId,
});
export const doUnlike = postId => ({
    type: DO_UNLIKE,
    postId: postId,
});
export const setUserProfile = userProfile => ({
    type: SET_USER_PROFILE,
    userProfile: userProfile,
});
export const toggleFetching = isFetching => ({
    type: TOGGLE_FETCHING,
    isFetching: isFetching,
});

export default profileReducer;