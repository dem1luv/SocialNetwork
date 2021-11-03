import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setUsers, toggleFetching, getUsers} from "../../../redux/usersReducer";
import {setUsersTotalCount} from "../../../redux/usersReducer";
import {setCurrentPage} from "../../../redux/usersReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(1, this.props.usersCount);
    }

    onSetCurrentPage(page) {
        this.props.getUsers(page, this.props.usersCount);
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

export default connect(mapStateToProps, {
    setUsers, setUsersTotalCount, setCurrentPage, toggleFetching, getUsers
})(UsersContainer);