const SET_NAME = "SET-NAME";
const SET_AVA = "SET-AVA";
const SET_CITY = "SET-CITY";
const SET_COUNTRY = "SET-COUNTRY";
const LOG_OUT = "LOG-OUT";

let initState = {
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

export default currentUserReducer;