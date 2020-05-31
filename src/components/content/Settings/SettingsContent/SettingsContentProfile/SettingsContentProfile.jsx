import React from "react";
import s from "./SettingsContentProfile.module.css";

function SettingsContentProfile(props) {
    let inputName = React.createRef();
    let inputAva = React.createRef();
    let inputCity = React.createRef();
    let inputCountry = React.createRef();

    const onSetName = () => {
        props.setName(props.currentUser, inputName.current.value);
    }
    const onSetAva = () => {
        props.setAva(props.currentUser, inputAva.current.value);
    }
    const onSetCity = () => {
        props.setCity(props.currentUser, inputCity.current.value);
    }
    const onSetCountry = () => {
        props.setCountry(props.currentUser, inputCountry.current.value);
    }

    return (
        <div className={s.settingsContent}>
            <img src="" alt=""/>
            <h2>Profile Settings</h2>
            <div className={s.item}>
                <span>Name:</span>
                <input type="text" defaultValue={props.currentUser.name} ref={inputName}/>
                <button onClick={onSetName}>Изменить</button>
            </div>
            <div className={s.item}>
                <span>Avatar (URL):</span>
                <input type="text" defaultValue={props.currentUser.avaUrl} ref={inputAva}/>
                <button onClick={onSetAva}>Изменить</button>
            </div>
            <div className={s.item}>
                <span>City:</span>
                <input type="text" defaultValue={props.currentUser.city} ref={inputCity}/>
                <button onClick={onSetCity}>Изменить</button>
            </div>
            <div className={s.item}>
                <span>Country:</span>
                <input type="text" defaultValue={props.currentUser.country} ref={inputCountry}/>
                <button onClick={onSetCountry}>Изменить</button>
            </div>
        </div>
    );
}

export default SettingsContentProfile;