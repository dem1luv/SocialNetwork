import React from "react";
import s from "./SettingsContentProfileIntro.module.css";

class SettingsContentProfileIntro extends React.Component {
    constructor(props) {
        super(props);
        this.inputTitle = React.createRef();
        this.inputText = React.createRef();
        this.titleInput = props.intro.title;
        this.textInput = props.intro.text;
    }

    onChangeTitle(e) {
        this.titleInput = e.target.value;
        this.forceUpdate();
    }
    onChangeText(e) {
        this.textInput = e.target.value;
        this.forceUpdate();
    }
    onSetIntro() {
        this.props.setIntro(this.props.intro.id, this.inputTitle.current.value, this.inputText.current.value);
    }
    onDeleteIntro() {
        this.props.deleteIntro(this.props.intro.id);
    }

    render() {
        return (
            <div className={s.intro}>
                <div>
                    <span>Title:</span>
                    <input type="text" value={this.titleInput} onChange={this.onChangeTitle.bind(this)} ref={this.inputTitle}/>
                </div>
                <div>
                    <span>Text:</span>
                    <textarea value={this.textInput} onChange={this.onChangeText.bind(this)} ref={this.inputText}/>
                </div>
                <button onClick={this.onSetIntro.bind(this)}>Change</button>
                <button onClick={this.onDeleteIntro.bind(this)}>Delete</button>
            </div>
        );
    }
}

export default SettingsContentProfileIntro;