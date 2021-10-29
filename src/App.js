import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import ProfileContainer from "./components/content/Profile/ProfileContainer";
import Messages from "./components/content/Messages/Messages";
import Music from "./components/content/Music/Music";
import Settings from "./components/content/Settings/Settings";
import NewsContainer from "./components/content/News/NewsContainer";
import SidebarLeftContainer from "./components/SidebarLeft/SidebarLeftContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/content/Users/UsersContainer";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <HeaderContainer/>
                    <SidebarLeftContainer/>
                    <main className="content">
                        <Route path="/profile/:userId" component={ProfileContainer}/>
                        <Route path="/news" component={NewsContainer}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/users" component={UsersContainer}/>
                        <Route path="/settings" component={Settings}/>
                    </main>
                </div>
            </HashRouter>
        );
    }
}

export default App;