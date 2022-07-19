import React from "react";
//MUI
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
//ICON MUI
import { AccessTime } from "@mui/icons-material";
// React-router-dom
import { Link } from "react-router-dom";
// Styles
import styles from '../Styles/TourCard.module.css'

const customizedTheme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 14,
                    },
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 12,
                    },
                },
            ],
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

const TourCard = ({ tourProp }) => {
    return (
        <ThemeProvider theme={customizedTheme}>
            <Grid item xs={12} sm={12} md={4}>
                <Paper elevation={3} sx={{ ":hover": { boxShadow: "0 1px 10px gray" }, transition: "all .3s linear", overflow: "hidden" }}>
                    <Link to={`/${tourProp.id}`}>
                        <img className="imgCard" src={tourProp.image} alt={tourProp.name} />
                    </Link>
                    <Box paddingX={1} >
                        <Typography variant="h6" component="h1">
                            {tourProp.name}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <AccessTime sx={{ width: "13px" }} />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tourProp.duration} Hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            marginTop={3}
                            marginBottom={2.5}
                            className={styles.rating}
                        >
                    {/* <ThemeProvider theme={typographyTheme} > */}
                            <Rating name="read-only" value={tourProp.rating} readOnly precision={0.1} size="small" />
                            <Typography variant="subtitle1" component="p" marginLeft={0.5}>
                                {tourProp.rating}

                            </Typography>
                    {/* </ThemeProvider> */}
                            <Typography variant="body3" component="p" marginLeft={2.5}>
                                ({tourProp.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <hr style={{ borderTop: "1px solid black" }} />
                        <Box>
                            <Typography variant="h6" component="h3" padding={1}>
                                From ${tourProp.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider>
    );
};

export default TourCard;
