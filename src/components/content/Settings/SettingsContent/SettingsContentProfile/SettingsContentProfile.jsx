import React from "react";
import s from "./SettingsContentProfile.module.css";
import SettingsContentProfileIntro from "./SettingsContentProfileIntro/SettingsContentProfileIntro";

class SettingsContentProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.resetChanges();
    }

    onChangeName(e) {
        this.props.changeName(this.props.currentUser, e.target.value);
    }

    onChangeAva(e) {
        this.props.changeAva(this.props.currentUser, e.target.value);
    }

    onChangeBg(e) {
        this.props.changeBg(this.props.currentUser, e.target.value);
    }

    onChangeCity(e) {
        this.props.changeCity(this.props.currentUser, e.target.value);
    }

    onChangeCountry(e) {
        this.props.changeCountry(this.props.currentUser, e.target.value);
    }

    onAddIntro() {
        this.props.addIntro();
    }

    onSaveChanges() {
        this.props.saveChanges();
    }

    render() {
        return (
            <div className={s.settingsContent}>
                <img src="" alt=""/>
                <h2>Profile Settings</h2>
                <div>
                    <div className={s.item}>
                        <span>Name:</span>
                        <input type="text" value={this.props.currentUser.newData.name}
                               onChange={this.onChangeName.bind(this)}
                               placeholder="Name"/>
                    </div>
                    <div className={s.item}>
                        <span>Avatar (URL):</span>
                        <input type="text" value={this.props.currentUser.newData.avaUrl}
                               onChange={this.onChangeAva.bind(this)}
                               placeholder="Avatar URL"/>
                    </div>
                    <div className={s.item}>
                        <span>Background (URL):</span>
                        <input type="text" value={this.props.currentUser.newData.bgUrl}
                               onChange={this.onChangeBg.bind(this)}
                               placeholder="Background URL"/>
                    </div>
                    <div className={s.item}>
                        <span>City:</span>
                        <input type="text" value={this.props.currentUser.newData.city}
                               onChange={this.onChangeCity.bind(this)}
                               placeholder="City"/>
                    </div>
                    <div className={s.item}>
                        <span>Country:</span>
                        <input type="text" value={this.props.currentUser.newData.country}
                               onChange={this.onChangeCountry.bind(this)}
                               placeholder="Country"/>
                    </div>
                </div>
                <h3>Intro</h3>
                <div>
                    <div>
                        {this.props.currentUser.newData.intro.map(i => <SettingsContentProfileIntro key={i.id}
                                                                                                    intro={i}
                                                                                                    changeIntroTitle={this.props.changeIntroTitle}
                                                                                                    changeIntroText={this.props.changeIntroText}
                                                                                                    deleteIntro={this.props.deleteIntro}/>)}
                    </div>
                    <button onClick={this.onAddIntro.bind(this)} className={s.buttonAddIntro}>Add Intro</button>
                </div>
                <button onClick={this.onSaveChanges.bind(this)} className={s.buttonSaveChanges}>Save Changes</button>
            </div>
        );
    }
}

export default SettingsContentProfile;