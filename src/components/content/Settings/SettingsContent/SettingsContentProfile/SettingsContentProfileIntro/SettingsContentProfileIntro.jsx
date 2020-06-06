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

    componentDidMount() {
        this.props.addIntroUpdateFunction(this.props.intro.id, this.getIntroData.bind(this));
    }

    onChangeTitle(e) {
        this.titleInput = e.target.value;
        this.forceUpdate();
    }

    onChangeText(e) {
        this.textInput = e.target.value;
        this.forceUpdate();
    }

    onDeleteIntro() {
        this.props.deleteIntro(this.props.intro.id);
    }

    getIntroData() {
        return {
            id: this.props.intro.id,
            title: this.inputTitle.current.value,
            text: this.inputText.current.value
        };
    }

    render() {
        return (
            <div className={s.intro}>
                <div>
                    <div>
                        <span>Title:</span>
                        <input type="text" value={this.titleInput} onChange={this.onChangeTitle.bind(this)}
                               ref={this.inputTitle} placeholder="Title"/>
                    </div>
                    <div>
                        <span>Text:</span>
                        <textarea value={this.textInput} onChange={this.onChangeText.bind(this)} ref={this.inputText}
                                  placeholder="Text"/>
                    </div>
                </div>
                <button onClick={this.onDeleteIntro.bind(this)}>Delete</button>
            </div>
        );
    }
}

export default SettingsContentProfileIntro;