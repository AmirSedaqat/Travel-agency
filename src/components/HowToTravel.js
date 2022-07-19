import React from "react";
// MUI
import { Box, Typography } from "@mui/material";
import AircraftGif from "../assets/Aircraft.gif";
import BusGif from "../assets/BusGif.gif";
import TrainGif from "../assets/TrainGif.gif";
//Styles
import styles from '../Styles/HowToTravel.module.css';
const HowToTravel = () => {
    return (
        <>
            <Box className={styles.container}>
                <span className={styles.hrTop}></span>
                <Box className={styles.typography}>
                    <Typography variant="h5" component="h5">
                    Always Travel With Us
                    </Typography>
                </Box>
                
                <Box className={styles.vehicles}>
                    <Box className={styles.vehicle}>
                        <img src={BusGif} alt="Bus Gif" />
                    </Box>
                    <Box className={styles.vehicle}>
                        <img src={AircraftGif} alt="Airplane Gif" />
                    </Box>

                    <Box className={styles.vehicle}>
                        <img src={TrainGif} alt="Train Gif" />
                    </Box>
                </Box>
                <span className={styles.hrBottom}></span>
            </Box>
        </>
    );
};

export default HowToTravel;
