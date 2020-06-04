const SET_NAME = "SET-NAME";
const SET_AVA = "SET-AVA";
const SET_CITY = "SET-CITY";
const SET_COUNTRY = "SET-COUNTRY";
const LOG_OUT = "LOG-OUT";
const ADD_INTRO = "ADD-INTRO";
const SET_INTRO = "SET-INTRO";
const DELETE_INTRO = "DELETE-INTRO";
const ADD_INTRO_UPDATE_FUNCTION = "ADD-INTRO-UPDATE-FUNCTION";

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
    introUpdateFunctions: [],
}

const currentUserReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.name,
            }
        case SET_AVA:
            return {
                ...state,
                avaUrl: action.avaUrl,
            }
        case SET_CITY:
            return {
                ...state,
                city: action.city,
            }
        case SET_COUNTRY:
            return {
                ...state,
                country: action.country,
            }
        case LOG_OUT:
            alert("ur logged out");
            return state;
        case ADD_INTRO:
            return {
                ...state,
                intro: [...state.intro, {
                    id: state.intro.length === 0 ? 0 : state.intro[state.intro.length - 1].id + 1,
                    title: "Title",
                    text: "Text"
                }],
            }
        case SET_INTRO: {
            let newIntro = [...state.intro];
            let index;
            newIntro.forEach((i, n) => {
                if (i.id === action.id) {
                    index = n;
                }
            });
            newIntro[index] = {id: action.id, title: action.title, text: action.text};
            return {
                ...state,
                intro: newIntro,
            }
        }
        case DELETE_INTRO: {
            // Deleting intro update function
            let newIntroUpdateFunctions = [...state.introUpdateFunctions];
            let indexFunction = -1;
            state.intro.map((s, i) => {
                if (s.id === action.id) {
                    indexFunction = i;
                }
            });
            newIntroUpdateFunctions.splice(indexFunction, 1);
            // Deleting intro
            let newIntro = [...state.intro];
            let indexIntro;
            newIntro.forEach((i, n) => {
                if (i.id === action.id) {
                    indexIntro = n;
                }
            });
            newIntro.splice(indexIntro, 1);
            return {
                ...state,
                intro: newIntro,
                introUpdateFunctions: [...state.introUpdateFunctions, {id: action.id, function_: action.function_}],
            };
        }
        case ADD_INTRO_UPDATE_FUNCTION:
            let index = -1;
            state.intro.map((s, i) => {
                if (s.id === action.id) {
                    index = i;
                }
            });
            if (index === -1) {
                return {
                    ...state,
                    introUpdateFunctions: [...state.introUpdateFunctions, {id: action.id, function_: action.function_}],
                };
            } else {
                return state;
            }
        default:
            return state;
    }
}

export const setNameAC = (user, name) => ({
    type: SET_NAME,
    user: user,
    name: name,
});
export const setAvaAC = (user, avaUrl) => ({
    type: SET_AVA,
    user: user,
    avaUrl: avaUrl,
});
export const setCityAC = (user, city) => ({
    type: SET_CITY,
    user: user,
    city: city,
});
export const setCountryAC = (user, country) => ({
    type: SET_COUNTRY,
    user: user,
    country: country,
});
export const logOutAC = () => ({
    type: LOG_OUT,
});
export const addIntroAC = () => ({
    type: ADD_INTRO,
});
export const setIntroAC = (id, title, text) => ({
    type: SET_INTRO,
    id: id,
    title: title,
    text: text,
});
export const deleteIntroAC = id => ({
    type: DELETE_INTRO,
    id: id,
});
export const addIntroUpdateFunctionAC = (id, function_) => ({
    type: ADD_INTRO_UPDATE_FUNCTION,
    id: id,
    function_: function_,
});

export default currentUserReducer;