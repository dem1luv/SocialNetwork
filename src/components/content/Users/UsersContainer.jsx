import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, toggleFetchingAC} from "../../../redux/usersReducer";
import {setUsersTotalCountAC} from "../../../redux/usersReducer";
import {setCurrentPageAC} from "../../../redux/usersReducer";
import axios from "axios";
import {getUsers} from "../../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        getUsers(1, this.props.usersCount)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            })
            .catch(() => this.props.toggleFetching(false));
    }

    onSetCurrentPage(page) {
        this.props.toggleFetching(true);
        getUsers(this.props.currentPage, this.props.usersCount)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
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