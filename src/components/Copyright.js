import React from "react";
// MUI
import {Box} from '@mui/material'
import CopyrightIcon from "@mui/icons-material/Copyright";
// Style
import styles from "../Styles/Copyright.module.css";
const Copyright = () => {
    return (
        <Box className={styles.Copyright}>
            <CopyrightIcon />
            Copyright All right reserved - 2022
        </Box>
    );
};

export default Copyright;
