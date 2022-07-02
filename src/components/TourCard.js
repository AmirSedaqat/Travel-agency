import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img className="imgCard" src="https://www.irandiamondtour.com/Content/Images/Tomb%20of%20Ferdowsi5.jpg" alt="masuleh" />
                <Typography variant="h6">Visiting Tomb of Ferdowsi</Typography>
            </Paper>
        </Grid>
    );
};

export default TourCard;
// Lake Chort  http://upload.wikimedia.org/wikipedia/commons/5/5c/Lake_miansheh.jpg
// Tomb of Ferdowsi https://www.irandiamondtour.com/Content/Images/Tomb%20of%20Ferdowsi5.jpg
// Masuleh  https://images.unsplash.com/photo-1580060366892-f079c2e1fa17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80
// Bisheh Waterfall https://greetingiran.com/wp-content/uploads/2017/06/bishe-waterfall.jpg
// Chabahar Martian Mountains https://blog.okcs.com/wp-content/uploads/2018/12/434579_0_default_800x533.jpg
// Nasir al-Mulk Mosque http://gravity.ir/wp-content/uploads/2014/02/Nasir-Al-Mulk-Mosque.jpg
// village Kandovan https://www.eligasht.com/Blog/wp-content/uploads/2017/05/kandovan.jpg
