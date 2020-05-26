import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import SidebarLeft from "./components/SidebarLeft/SidebarLeft";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <SidebarLeft/>
            </div>
        </BrowserRouter>
    );
}

export default App;