const LOG_OUT = "LOG-OUT";

let initState = {};


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