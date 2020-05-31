const ADD_POST = "ADD-POST";
const CHANGE_INPUT = "CHANGE-INPUT";
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
                name: "Dmytry Demjanenko",
            },
        },
    ],
    inputText: "",
    user: {
        id: 0,
        avaUrl: "https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg",
        bgUrl: "https://storge.pic2.me/cm/3200x1800/592/55fc5d8db7b39.jpg",
        name: "Dmytry Demjanenko",
        city: "Sumy",
        country: "Ukraine",
        intro: [
            {title: "About me", text: "Hi, my name is Dmytro and I'm 15 old"},
            {title: "Favorite anime", text: "JoJo's Bizzare Adventure"},
            {title: "Best Friend", text: "Me"},
        ],
    },
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
                    user: {...action.currentUser},
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

export const addPostAC = currentUser => ({
    type: ADD_POST,
    currentUser: currentUser,
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