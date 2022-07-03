import React from "react";
import "./App.css";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchAppBar from "./components/AppBar";
const App = () => {
    return (
        <div>
                <SearchAppBar/>
            <Container sx={{marginY:5}}>
                <Grid container spacing={5}>
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </Grid>
            </Container>
        </div>
    );
};

export default App;
