import React from "react";
import "./App.css";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
const App = () => {
    return (
        <div>
            <Container>
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
