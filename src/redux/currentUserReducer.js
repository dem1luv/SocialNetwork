let initState = {
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

const currentUserReducer = (state = initState, action) => {
    return state;
}

export default currentUserReducer;