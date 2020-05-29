import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import SidebarLeft from "./components/SidebarLeft/SidebarLeft";
import Profile from "./components/content/Profile/Profile";
import Messages from "./components/content/Messages/Messages";
import Music from "./components/content/Music/Music";
import Users from "./components/content/Users/Users";
import Settings from "./components/content/Settings/Settings";
import NewsContainer from "./components/content/News/NewsContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <SidebarLeft/>
                <main className="content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/news" component={NewsContainer}/>
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