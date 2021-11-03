import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    setUserProfile,
    toggleFetching
} from "../../../redux/profileReducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
    }

    render() {
        return <Profile isFetching={this.props.isFetching}/>
    }
}

const mapStateToProps = state => ({
   isFetching: state.profilePage.isFetching
});

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    toggleFetching, setUserProfile, getUserProfile
})(ProfileContainerWithRouter);