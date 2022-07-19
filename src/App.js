import React from "react";
// Styles
import "./Styles/App.css";
// React-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import Tour from "./pages/Tour";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ScrollTopMe from "./components/ScrollTopMe";
const App = () => {

    return (
        <div className='App'>
        <BrowserRouter>
            <SearchAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<Tour />} />
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/login" element={<Login/>}/>

            </Routes>
            <ScrollTopMe/>
        </BrowserRouter>
        </div>
    );
};

export default App;
