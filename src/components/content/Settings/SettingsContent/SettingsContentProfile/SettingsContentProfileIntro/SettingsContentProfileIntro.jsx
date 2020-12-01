import React from "react";
import s from "./SettingsContentProfileIntro.module.css";

class SettingsContentProfileIntro extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeTitle(e) {
        this.props.changeIntroTitle(this.props.intro.id, e.target.value);
    }

    onChangeText(e) {
        this.props.changeIntroText(this.props.intro.id, e.target.value);
    }

    onDeleteIntro() {
        this.props.deleteIntro(this.props.intro.id);
    }

    render() {
        return (
            <div className={s.intro}>
                <div>
                    <div>
                        <span>Title:</span>
                        <input type="text" value={this.props.intro.title} onChange={this.onChangeTitle.bind(this)} placeholder="Title"/>
                    </div>
                    <div>
                        <span>Text:</span>
                        <textarea value={this.props.intro.text} onChange={this.onChangeText.bind(this)} placeholder="Text"/>
                    </div>
                </div>
                <button onClick={this.onDeleteIntro.bind(this)}>Delete</button>
            </div>
        );
    }
}

export default SettingsContentProfileIntro;