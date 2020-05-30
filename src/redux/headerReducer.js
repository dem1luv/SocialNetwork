const LOG_OUT = "LOG-OUT";

let initState = {
    currentUser: {
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

const headerReducer = (state = initState, action) => {
    switch (action.type) {
        case LOG_OUT:
            alert("ur logged out");
            return state;
        default:
            return state;
    }
}

export const logOutAC = () => ({
    type: LOG_OUT,
});


export default headerReducer;