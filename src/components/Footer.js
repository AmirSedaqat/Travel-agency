import React from "react";
// MUI
import { Box, Typography } from "@mui/material";
//images & gif
import LOGOWEB from "../assets/LOGOWEB.png";
import travelGif from "../assets/Travel.gif";
//Styles
import styles from "../Styles/Footer.module.css";
//ICON MUI
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Copyright from "./Copyright";
const Footer = () => {
    return (
        <>
            <Box className={styles.container}>
                <Box className={styles.content}>
                    <Box>
                        <img src={travelGif} alt="Logo" style={{ height: "60px" }} /> <img src={LOGOWEB} alt="Logo Large" />{" "}
                    </Box>
                    <Box className={styles.socialLink}>
                        <a href="https://instagram.com"  rel="noopener">
                            <InstagramIcon />
                        </a>
                        <a href="https://telegram.org" target="_blank">
                            <TelegramIcon />
                        </a>
                        <a href="https://pinterest.com" target="_blank">
                            <PinterestIcon />
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <FacebookIcon />
                        </a>
                    </Box>
                </Box>
                <Box className={styles.content}>
                    <h4>ABOUT US</h4>
                    <Typography varinat="p" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius gravida urna, sit amet placerat nunc pellentesque vitae. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. Nunc nulla est, finibus eu malesuada suscipit, vulputate non turpis. In ultricies.
                    </Typography>
                </Box>
                <Box className={styles.content}>
                    <h4>CONTACT US</h4>
                    <Box className={styles.contactUs}>
                        <PhoneIcon /> 09108654272
                    </Box>
                    <Box className={styles.contactUs}>
                        <LocationOnIcon />
                        Iran , Tehran , District 8
                    </Box>
                    <Box className={styles.contactUs}>
                        <EmailIcon />
                        amirsedaghat.dev@gmail.com
                    </Box>
                </Box>
            </Box>
            <Copyright />
        </>
    );
};

export default Footer;
