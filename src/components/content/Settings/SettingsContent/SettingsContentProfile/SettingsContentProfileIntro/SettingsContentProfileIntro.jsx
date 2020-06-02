import React from "react";
import s from "./SettingsContentProfileIntro.module.css";

class SettingsContentProfileIntro extends React.Component {
    constructor(props) {
        super(props);
        this.inputTitle = React.createRef();
        this.inputText = React.createRef();
    }

    onSetIntro() {
        this.props.setIntro(this.props.intro.id, this.props.inputTitle.current.value, this.props.inputText.current.value);
    }

    onDeleteIntro() {
        this.props.deleteIntro(this.props.intro.id);
    }

    render() {
        return (
            <div className={s.intro}>
                <div>
                    <span>Title:</span>
                    <input type="text" defaultValue={this.props.intro.title} ref={this.props.inputTitle}/>
                </div>
                <div>
                    <span>Text:</span>
                    <textarea defaultValue={this.props.intro.text} ref={this.props.inputText}/>
                </div>
                <button onClick={this.onSetIntro.bind(this)}>Change</button>
                <button onClick={this.onDeleteIntro.bind(this)}>Delete</button>
            </div>
        );
    }
}

export default SettingsContentProfileIntro;