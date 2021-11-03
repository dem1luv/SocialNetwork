import {userAPI} from "../api/api";

const SET_USERS = "SET-USERS";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

const initState = {
    users: [],
    usersTotalCount: 0,
    usersCount: 12,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};
        case SET_USERS_TOTAL_COUNT:
            return {...state, usersTotalCount: action.usersTotalCount};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export const setUsers = users => ({
    type: SET_USERS,
    users: users,
});
export const getUsers = (page = 1, usersCount = 10)  => {
    return dispatch => {
        dispatch(toggleFetching(true));
        userAPI.getUsers(page, usersCount)
            .then(data => {
                dispatch(toggleFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
                dispatch(setCurrentPage(page));
            })
            .catch(() => dispatch(toggleFetching(false)));
    }
}

export const setUsersTotalCount = usersTotalCount => ({
    type: SET_USERS_TOTAL_COUNT,
    usersTotalCount: usersTotalCount,
});

export const setCurrentPage = page => ({
    type: SET_CURRENT_PAGE,
    page: page,
});

export const toggleFetching = isFetching => ({
    type: TOGGLE_FETCHING,
    isFetching: isFetching,
});

export default usersReducer;