const CHANGE_NAME = "CHANGE-NAME";
const CHANGE_AVA = "CHANGE-AVA";
const CHANGE_BG = "CHANGE-BG";
const CHANGE_CITY = "CHANGE-CITY";
const CHANGE_COUNTRY = "CHANGE-COUNTRY";
const LOG_OUT = "LOG-OUT";
const ADD_INTRO = "ADD-INTRO";
const CHANGE_INTRO_TITLE = "CHANGE-INTRO-TITLE";
const CHANGE_INTRO_TEXT = "CHANGE-INTRO-TEXT";
const DELETE_INTRO = "DELETE-INTRO";
const SAVE_CHANGES = "SAVE-CHANGES";
const RESET_CHANGES = "RESET-CHANGES";

let initState = {
    id: 0,
    avaUrl: "https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg",
    bgUrl: "https://storge.pic2.me/cm/3200x1800/592/55fc5d8db7b39.jpg",
    name: "Dmytry Demjanenko",
    city: "Sumy",
    country: "Ukraine",
    intro: [
        {id: 0, title: "About me", text: "Hi, my name is Dmytro and I'm 15 old"},
        {id: 1, title: "Favorite anime", text: "JoJo's Bizzare Adventure"},
        {id: 2, title: "Best Friend", text: "Me"},
    ],
    newData: {
        avaUrl: "https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg",
        bgUrl: "https://storge.pic2.me/cm/3200x1800/592/55fc5d8db7b39.jpg",
        name: "Dmytry Demjanenko",
        city: "Sumy",
        country: "Ukraine",
        intro: [
            {id: 0, title: "About me", text: "Hi, my name is Dmytro and I'm 15 old"},
            {id: 1, title: "Favorite anime", text: "JoJo's Bizzare Adventure"},
            {id: 2, title: "Best Friend", text: "Me"},
        ],
    },
}

const currentUserReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                newData: {
                    ...state.newData,
                    name: action.name,
                },
            }
        case CHANGE_AVA:
            return {
                ...state,
                newData: {
                    ...state.newData,
                    avaUrl: action.avaUrl,
                }
            }
        case CHANGE_BG:
            return {
                ...state,
                newData: {
                    ...state.newData,
                    bgUrl: action.bgUrl,
                },
            }
        case CHANGE_CITY:
            return {
                ...state,
                newData: {
                    ...state.newData,
                    city: action.city,
                },
            }
        case CHANGE_COUNTRY:
            return {
                ...state,
                newData: {
                    ...state.newData,
                    country: action.country,
                },
            }
        case LOG_OUT:
            alert("ur logged out");
            return state;
        case ADD_INTRO: {
            return {
                ...state,
                newData: {
                    ...state.newData,
                    intro: [
                        ...state.newData.intro,
                        {
                            id: state.newData.intro.length === 0 ? 0 : state.newData.intro[state.newData.intro.length - 1].id + 1,
                            title: "Title",
                            text: "Text",
                        },
                    ],
                },
            }
        }
        case CHANGE_INTRO_TITLE: {
            let newState = {
                ...state,
                newData: {
                    ...state.newData,
                    intro: [...state.newData.intro],
                },
            };
            let introIndex = 0;
            newState.newData.intro.map(item => {
                if (item.id === action.id) {
                    introIndex = newState.newData.intro.indexOf(item);
                }
            });
            newState.newData.intro[introIndex].title = action.title;
            return newState;
        }
        case CHANGE_INTRO_TEXT: {
            let newState = {
                ...state,
                newData: {
                    ...state.newData,
                    intro: [...state.newData.intro],
                },
            };
            let introIndex = 0;
            newState.newData.intro.map(item => {
                if (item.id === action.id) {
                    introIndex = newState.newData.intro.indexOf(item);
                }
            });
            newState.newData.intro[introIndex].text = action.text;
            return newState;
        }
        case DELETE_INTRO: {
            let newState = {
                ...state,
                newData: {
                    ...state.newData,
                    intro: [...state.newData.intro],
                },
            };
            newState.newData.intro = newState.newData.intro.filter(item => item.id !== action.id);
            return newState;
        }
        case SAVE_CHANGES: {
            return {
                ...state,
                ...state.newData,
                intro: [...state.newData.intro],
            }
        }
        case RESET_CHANGES: {
            return {
                ...state,
                newData: {
                    avaUrl: state.avaUrl,
                    bgUrl: state.bgUrl,
                    name: state.name,
                    city: state.city,
                    country: state.country,
                    intro: [...state.intro],
                },
            };
        }
        default:
            return state;
    }
}

export const changeNameAC = (user, name) => ({
    type: CHANGE_NAME,
    user: user,
    name: name,
});
export const changeAvaAC = (user, avaUrl) => ({
    type: CHANGE_AVA,
    user: user,
    avaUrl: avaUrl,
});
export const changeBgAC = (user, bgUrl) => ({
    type: CHANGE_BG,
    user: user,
    bgUrl: bgUrl,
});
export const changeCityAC = (user, city) => ({
    type: CHANGE_CITY,
    user: user,
    city: city,
});
export const changeCountryAC = (user, country) => ({
    type: CHANGE_COUNTRY,
    user: user,
    country: country,
});
export const logOutAC = () => ({
    type: LOG_OUT,
});
export const addIntroAC = () => ({
    type: ADD_INTRO,
});
export const changeIntroTitleAC = (introId, title) => ({
    type: CHANGE_INTRO_TITLE,
    id: introId,
    title: title,
});
export const changeIntroTextAC = (introId, text) => ({
    type: CHANGE_INTRO_TEXT,
    id: introId,
    text: text,
});
export const deleteIntroAC = id => ({
    type: DELETE_INTRO,
    id: id,
});
export const saveChangesAC = () => ({
    type: SAVE_CHANGES,
});
export const resetChangesAC = () => ({
    type: RESET_CHANGES,
});

export default currentUserReducer;