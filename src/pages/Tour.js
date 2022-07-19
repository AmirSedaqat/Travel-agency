//MUI
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//Import
import Accordian from "../components/Accordian";
import KeepModal from "../components/KeepModal";

// Styles
import styles from '../Styles/Tour.module.css'

const Tour = () => {
    return (
        <div>
            <Container sx={{ width: "max-content",height:'1000px' }}>
                
                <Box>
                    <Typography variant="h6" component="h4" marginTop={4}>
                        About this ticket
                    </Typography>
                    <Typography variant="paragraph" component="p" marginTop={1} className={styles.informationTour}>
                        Iran is a country of four seasons that attracts many tourists every year and many tourists travel to Iran. Each province has its own style and they treat you with their accent
                        and clothes. If you have never had the experience of traveling to the beautiful country of Iran, contact us.
                    </Typography>
                </Box>
                <Box marginBottom={10}>
                    <Typography variant="h6" component="h4" marginTop={4} marginBottom={1}>
                        Frequently Asked Questions
                    </Typography>
                    <Accordian  />
                </Box>

                <Paper sx={{padding:'15px', position: "fixed", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "center",color:'white',backgroundColor:'#DE543C' }} elevation={10}>
                        <KeepModal />
                </Paper>
            </Container>
        </div>
    );
};
export default Tour;
