import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import Tour from "./pages/Tour";

const App = () => {
    return (
        <BrowserRouter>
            <SearchAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Tour />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
