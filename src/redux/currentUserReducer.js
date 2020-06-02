const SET_NAME = "SET-NAME";
const SET_AVA = "SET-AVA";
const SET_CITY = "SET-CITY";
const SET_COUNTRY = "SET-COUNTRY";
const LOG_OUT = "LOG-OUT";
const ADD_INTRO = "ADD-INTRO";
const SET_INTRO = "SET-INTRO";
const DELETE_INTRO = "DELETE-INTRO";
const SAVE_CHANGES = "SAVE-CHANGES";
const UPDATE_TEXT_INPUTS = "UPDATE-TEXT-INPUTS";

let initState = {
    id: 0,
    avaUrl: "https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg",
    avaUrlTextInput: "",
    bgUrl: "https://storge.pic2.me/cm/3200x1800/592/55fc5d8db7b39.jpg",
    bgUrlTextInput: "",
    name: "Dmytry Demjanenko",
    nameTextInput: "",
    city: "Sumy",
    cityTextInput: "",
    country: "Ukraine",
    countryTextInput: "",
    intro: [
        {id: 0, title: "About me", text: "Hi, my name is Dmytro and I'm 15 old"},
        {id: 1, title: "Favorite anime", text: "JoJo's Bizzare Adventure"},
        {id: 2, title: "Best Friend", text: "Me"},
    ],
    introTextInput: [],
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
                intro: [...state.intro, {id: state.intro.length, title: action.title, text: action.text}],
            }
        case SET_INTRO: {
            debugger;
            let newIntro = [...state.intro];
            newIntro[action.id] = {id: action.id, title: action.title, text: action.text};
            return {
                ...state,
                intro: newIntro,
            }
        }
        case DELETE_INTRO: {
            let newIntro = [...state.intro];
            newIntro.splice(newIntro.forEach( (i, index) => {
                if (i.id === action.id) {
                    return index;
                }
            }), 1);
            return {
                ...state,
                intro: newIntro,
            }
        }
        case SAVE_CHANGES:
            return state;
        case UPDATE_TEXT_INPUTS:
            alert("UPDATE_TEXT_INPUTS");
            return state;
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
export const addIntroAC = (title, text) => ({
    type: ADD_INTRO,
    title: title,
    text: text,
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
export const saveChangesAC = () => ({
    type: SAVE_CHANGES,
});
export const updateTextInputs = () => ({
    type: UPDATE_TEXT_INPUTS,
});

export default currentUserReducer;