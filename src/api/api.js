import axios from "axios";

const axiosInstance = axios.create({
    headers: {
        'API-KEY': 'ba3b16ba-c3a0-404f-acd8-1f2bd9f7b405'
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const getUsers = (page = 1, usersCount = 10) => {
    return axiosInstance.get(`users?page=${page}&count=${usersCount}`, {
        headers: {
            'API-KEY': 'ba3b16ba-c3a0-404f-acd8-1f2bd9f7b405'
        }
    }).then(response => response.data);
}

export const getUserProfile = (userId) => {
    return axiosInstance.get(`profile/${userId}`)
        .then(response => response.data);
}