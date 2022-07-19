import React from "react";
// Import
import TourCard from "../components/TourCard";
import SliderSlick from "../components/SliderSlick/SliderSlick";
// MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import cities from "../data.json";
import  Typography  from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";

import HowToTravel from "../components/HowToTravel";
import Footer from "../components/Footer";
const Home = () => {
    const theme = createTheme();

theme.typography.h4 = {
  fontSize: '24px',
  '@media (min-width:600px)': {
    fontSize: '32px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '38px',
  },
};
    return (
        <div >
            <SliderSlick />
            <Container sx={{ marginY: 5 }}>
                {cities.map((city) => (
                    <div key={city.id} >
                        <ThemeProvider theme={theme}>
                        <Typography  variant="h4" component="h2" marginTop={5} marginBottom={3} >
                            {city.name}
                        </Typography>

                        </ThemeProvider>

                        <Grid container spacing={5}>
                            {city.tours.map((tour, index) => (
                                <TourCard tourProp={tour} key={index}/>
                            ))}
                        </Grid>
                    </div>
                ))}

            </Container>
        <HowToTravel/>
        <Footer/>
        </div>
    );
};
export default Home;
