import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";

class ProfileInfoContainer extends React.Component {
    render() {
        return <ProfileInfo {...this.props}/>
    }
}

const mapStateToProps = state => ({
    largePhoto: state.profilePage.userProfile?.photos?.large,
    fullName: state.profilePage.userProfile?.fullName
});

export default connect(mapStateToProps, {})(ProfileInfoContainer)