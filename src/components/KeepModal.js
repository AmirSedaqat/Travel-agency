import * as React from "react";
//MUI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
//Import
import DatePicker from "./DatePicker";
// Styles
import styles from '../Styles/KeepModal.module.css'
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid gray",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

export default function KeepModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={styles.navar}>

            <Button onClick={handleOpen} >Book Now </Button>

            <Modal keepMounted open={open} onClose={handleClose} aria-labelledby="keep-mounted-modal-title" aria-describedby="keep-mounted-modal-description">
                <Box sx={style}>
                    <Typography variant="h5" component="h3">
                        <DatePicker />
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
