import React from "react";
import s from "./SettingsContentProfile.module.css";
import SettingsContentProfileIntro from "./SettingsContentProfileIntro/SettingsContentProfileIntro";

class SettingsContentProfile extends React.Component {
    constructor(props) {
        super(props);
        this.inputName = React.createRef();
        this.inputAva = React.createRef();
        this.inputCity = React.createRef();
        this.inputCountry = React.createRef();
        //props.updateTextInputs();
    }

    componentWillUnmount() {
        this.props.restoreRemovedIntros();
        this.props.removeAddedAndRemovedIntros();
    }

    setName() {
        this.props.setName(this.props.currentUser, this.inputName.current.value);
    }

    setAva() {
        this.props.setAva(this.props.currentUser, this.inputAva.current.value);
    }

    setCity() {
        this.props.setCity(this.props.currentUser, this.inputCity.current.value);
    }

    setCountry() {
        this.props.setCountry(this.props.currentUser, this.inputCountry.current.value);
    }

    updateIntros() {
        this.props.updateIntros();
    }

    onAddIntro() {
        this.props.addIntro();
    }

    onSaveChanges() {
        this.setName();
        this.setAva();
        this.setCity();
        this.setCountry();
        this.updateIntros();
        this.props.removeAddedAndRemovedIntros();
    }

    render() {
        return (
            <div className={s.settingsContent}>
                <img src="" alt=""/>
                <h2>Profile Settings</h2>
                <div>
                    <div className={s.item}>
                        <span>Name:</span>
                        <input type="text" defaultValue={this.props.currentUser.name} ref={this.inputName}
                               placeholder="Name"/>
                    </div>
                    <div className={s.item}>
                        <span>Avatar (URL):</span>
                        <input type="text" defaultValue={this.props.currentUser.avaUrl} ref={this.inputAva}
                               placeholder="Avatar URL"/>
                    </div>
                    <div className={s.item}>
                        <span>City:</span>
                        <input type="text" defaultValue={this.props.currentUser.city} ref={this.inputCity}
                               placeholder="City"/>
                    </div>
                    <div className={s.item}>
                        <span>Country:</span>
                        <input type="text" defaultValue={this.props.currentUser.country} ref={this.inputCountry}
                               placeholder="Country"/>
                    </div>
                </div>
                <h3>Intro</h3>
                <div>
                    {this.props.currentUser.intro.map(i => <SettingsContentProfileIntro key={i.id}
                                                                                        intro={i}
                                                                                        deleteIntro={this.props.deleteIntro}
                                                                                        addIntroUpdateFunction={this.props.addIntroUpdateFunction}/>)}
                    {this.props.currentUser.addedIntro.map(i => <SettingsContentProfileIntro key={i.id}
                                                                                             intro={i}
                                                                                             deleteIntro={this.props.deleteIntro}
                                                                                             addIntroUpdateFunction={this.props.addIntroUpdateFunction}/>)}
                    <button onClick={this.onAddIntro.bind(this)}>Add Intro</button>
                </div>
                <button onClick={this.onSaveChanges.bind(this)}>Save Changes</button>
            </div>
        );
    }
}

export default SettingsContentProfile;