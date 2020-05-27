import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import SidebarLeft from "./components/SidebarLeft/SidebarLeft";
import Profile from "./components/Content/Profile/Profile";
import News from "./components/Content/News/News";
import Messages from "./components/Content/Messages/Messages";
import Music from "./components/Content/Music/Music";
import Users from "./components/Content/Users/Users";
import Settings from "./components/Content/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <SidebarLeft/>
                <main className="content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/news" component={News}/>
                    <Route path="/messages" component={Messages}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/settings" component={Settings}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;