import React from "react";
import "./Styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import Tour from "./pages/Tour";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
    return (
        <div className="App">
        <BrowserRouter>
            <SearchAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Tour />} />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
        
        </div>
    );
};

export default App;
