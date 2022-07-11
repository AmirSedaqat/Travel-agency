import React from "react";
//Material imports
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
//@mui/icons-material imports
import { AccessTime } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
});
const TourCard = ({ tourProp }) => {
   
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={customizedTheme}>
                <Paper elevation={3}>
                <Link to={`/${tourProp.id}`}>

                     <img className="imgCard" src={tourProp.image} alt={tourProp.name}  />
                </Link>
                    <Box paddingX={1}>
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
                            marginBottom={1.5}
                        >
                            <Rating name="read-only" value={tourProp.rating} readOnly precision={0.1} size="small" />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tourProp.rating}
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={2.5}>
                                ({tourProp.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <hr />
                        <Box>
                            <Typography variant="h6" component="h3" padding={1}>
                                From ${tourProp.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
};

export default TourCard;
