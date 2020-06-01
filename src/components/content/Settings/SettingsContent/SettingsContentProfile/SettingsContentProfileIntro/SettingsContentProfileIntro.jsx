import React from "react";
import s from "./SettingsContentProfileIntro.module.css";

function SettingsContentProfileIntro(props) {
    let inputTitle = React.createRef();
    let inputText = React.createRef();

    const onSetIntro = () => {
        props.setIntro(props.intro.id, inputTitle.current.value, inputText.current.value);
    }
    const onDeleteIntro = () => {
        props.deleteIntro(props.intro.id);
    }

    return (
        <div className={s.intro}>
            <div>
                <span>Title:</span>
                <input type="text" defaultValue={props.intro.title} ref={inputTitle}/>
            </div>
            <div>
                <span>Text:</span>
                <textarea type="text" defaultValue={props.intro.text} ref={inputText}/>
            </div>
            <button onClick={onSetIntro}>Change</button>
            <button onClick={onDeleteIntro}>Delete</button>
        </div>
    );
}

export default SettingsContentProfileIntro;