import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, toggleFetchingAC} from "../../../redux/usersReducer";
import {setUsersTotalCountAC} from "../../../redux/usersReducer";
import {setCurrentPageAC} from "../../../redux/usersReducer";
import axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.usersCount}`, {
            headers: {
                'API-KEY': 'ba3b16ba-c3a0-404f-acd8-1f2bd9f7b405'
            }
        })
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            })
            .catch(() => this.props.toggleFetching(false));
    }

    onSetCurrentPage(page) {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCount}`, {
            headers: {
                'API-KEY': 'ba3b16ba-c3a0-404f-acd8-1f2bd9f7b405'
            }
        })
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(page);
            })
            .catch(() => this.props.toggleFetching(false));
    }

    render() {
        return <Users
            usersTotalCount={this.props.usersTotalCount}
            usersCount={this.props.usersCount}
            currentPage={this.props.currentPage}
            users={this.props.users}
            isFetching={this.props.isFetching}
            onSetCurrentPage={this.onSetCurrentPage.bind(this)}
        />
    }
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    usersTotalCount: state.usersPage.usersTotalCount,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
});

const mapDispatchToProps = dispatch => ({
    setUsers: users => {
        dispatch(setUsersAC(users))
    },
    setUsersTotalCount: usersTotalCount => {
        dispatch(setUsersTotalCountAC(usersTotalCount))
    },
    setCurrentPage: page => {
        dispatch(setCurrentPageAC(page))
    },
    toggleFetching: isFetching => {
        dispatch(toggleFetchingAC(isFetching))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);