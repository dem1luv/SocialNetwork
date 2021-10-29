import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, changeInput, doLike, doUnlike, setUserProfile, toggleFetching} from "../../../redux/profileReducer";
import axios from "axios";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        let userId = this.props.match.params.userId;
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUserProfile(response.data);
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