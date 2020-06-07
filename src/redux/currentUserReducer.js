const SET_NAME = "SET-NAME";
const SET_AVA = "SET-AVA";
const SET_BG = "SET-BG";
const SET_CITY = "SET-CITY";
const SET_COUNTRY = "SET-COUNTRY";
const LOG_OUT = "LOG-OUT";
const ADD_INTRO = "ADD-INTRO";
const DELETE_INTRO = "DELETE-INTRO";
const ADD_INTRO_UPDATE_FUNCTION = "ADD-INTRO-UPDATE-FUNCTION";
const UPDATE_INTROS = "UPDATE-INTROS";
const REMOVE_ADDED_AND_REMOVED_INTROS = "REMOVE-ADDED-AND-REMOVED-INTROS";
const RESTORE_REMOVED_INTROS = "RESTORE-REMOVED-INTROS";

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
    addedIntro: [],
    removedIntro: [],
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
        case SET_BG:
            return {
                ...state,
                bgUrl: action.bgUrl,
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
        case ADD_INTRO: {
            let allIntro = [...state.intro, ...state.addedIntro, ...state.removedIntro];
            allIntro.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
            debugger;
            return {
                ...state,
                addedIntro: [...state.addedIntro, {
                    id: allIntro.length === 0 ? 0 : allIntro[allIntro.length - 1].id + 1,
                    title: "Title",
                    text: "Text"
                }],
            }
        }
        case DELETE_INTRO: {
            // Deleting intro update function
            let newIntroUpdateFunctions = [...state.introUpdateFunctions];
            let indexFunction;
            let newRemovedIntro = [...state.removedIntro];
            let removedIntroItem;
            state.introUpdateFunctions.map((s, i) => {
                if (s.id === action.id) {
                    indexFunction = i;
                }
            });
            newIntroUpdateFunctions.splice(indexFunction, 1);
            // Deleting intro
            let newIntro = [...state.intro];
            let indexIntro = -1;
            newIntro.forEach((i, n) => {
                if (i.id === action.id) {
                    indexIntro = n;
                }
            });
            if (indexIntro !== -1) {
                removedIntroItem = newIntro.splice(indexIntro, 1);
                newRemovedIntro.push(removedIntroItem[0]);
            }
            // Deleting added intro
            let newAddedIntro = [...state.addedIntro];
            let indexAddedIntro = -1;
            newAddedIntro.forEach((i, n) => {
                if (i.id === action.id) {
                    indexAddedIntro = n;
                }
            });
            if (indexAddedIntro !== -1) {
                newAddedIntro.splice(indexAddedIntro, 1);
            }
            // return
            debugger;
            return {
                ...state,
                intro: newIntro,
                introUpdateFunctions: newIntroUpdateFunctions,
                addedIntro: newAddedIntro,
                removedIntro: newRemovedIntro,
            };
        }
        case ADD_INTRO_UPDATE_FUNCTION:
            let index = -1;
            state.introUpdateFunctions.map((s, i) => {
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
                let newIntroUpdateFunctions = [...state.introUpdateFunctions];
                newIntroUpdateFunctions[index].function_ = action.function_;
                return {
                    ...state,
                    introUpdateFunctions: newIntroUpdateFunctions,
                };
            }
        case UPDATE_INTROS: {
            let newIntro = [];
            debugger;
            state.introUpdateFunctions.forEach(i => {
                newIntro.push(i.function_());
            });
            return {
                ...state,
                intro: newIntro,
            };
        }
        case REMOVE_ADDED_AND_REMOVED_INTROS:
            return {
                ...state,
                addedIntro: [],
                removedIntro: [],
                introUpdateFunctions: [],
            };
        case RESTORE_REMOVED_INTROS: {
            let newIntro = [...state.intro, ...state.removedIntro];
            newIntro.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
            return {
                ...state,
                intro: newIntro,
            }
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
export const setBgAC = (user, bgUrl) => ({
    type: SET_BG,
    user: user,
    bgUrl: bgUrl,
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
export const deleteIntroAC = id => ({
    type: DELETE_INTRO,
    id: id,
});
export const addIntroUpdateFunctionAC = (id, function_) => ({
    type: ADD_INTRO_UPDATE_FUNCTION,
    id: id,
    function_: function_,
});
export const updateIntrosAC = () => ({
    type: UPDATE_INTROS,
});
export const removeAddedAndRemovedIntrosAC = () => ({
    type: REMOVE_ADDED_AND_REMOVED_INTROS,
});
export const restoreRemovedIntrosAC = () => ({
    type: RESTORE_REMOVED_INTROS,
});

export default currentUserReducer;