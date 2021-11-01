import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, changeInput, doLike, doUnlike, setUserProfile, toggleFetching} from "../../../redux/profileReducer";
import axios from "axios";
import {withRouter} from "react-router";
import {getUserProfile} from "../../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        let userId = this.props.match.params.userId;
        getUserProfile(userId).then(data => {
                this.props.toggleFetching(false);
                this.props.setUserProfile(data);
            });
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
    toggleFetching, setUserProfile
})(ProfileContainerWithRouter);