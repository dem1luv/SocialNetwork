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

    onAddIntro() {
        this.props.addIntro();
    }
    onSaveChanges() {
        this.setName();
        this.setAva();
        this.setCity();
        this.setCountry();
    }

    render() {
        return (
            <div className={s.settingsContent}>
                <img src="" alt=""/>
                <h2>Profile Settings</h2>
                <div>
                    <div className={s.item}>
                        <span>Name:</span>
                        <input type="text" defaultValue={this.props.currentUser.name} ref={this.inputName}/>
                    </div>
                    <div className={s.item}>
                        <span>Avatar (URL):</span>
                        <input type="text" defaultValue={this.props.currentUser.avaUrl} ref={this.inputAva}/>
                    </div>
                    <div className={s.item}>
                        <span>City:</span>
                        <input type="text" defaultValue={this.props.currentUser.city} ref={this.inputCity}/>
                    </div>
                    <div className={s.item}>
                        <span>Country:</span>
                        <input type="text" defaultValue={this.props.currentUser.country} ref={this.inputCountry}/>
                    </div>
                </div>
                <h2>Intro</h2>
                <div>
                    {this.props.currentUser.intro.map(i => <SettingsContentProfileIntro key={i.id}
                                                                                        intro={i}
                                                                                        setIntro={this.props.setIntro}
                                                                                        deleteIntro={this.props.deleteIntro}/>)}
                    <button onClick={this.onAddIntro.bind(this)}>Add Intro</button>
                </div>
                <button onClick={this.onSaveChanges.bind(this)}>Save Changes</button>
            </div>
        );
    }
}

export default SettingsContentProfile;