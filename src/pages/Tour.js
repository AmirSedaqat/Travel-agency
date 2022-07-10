import { Typography, Container, Box } from "@mui/material";
import Accordian from "../components/Accordian";
import ImageCollage from "../components/ImageCollage";

const Tour = () => {
    return (
        <div>
            <Container sx={{ width: "900px" }}>
                <Typography variant="h3" component="h1" marginTop={3}>
                    Explore the World in Iran
                </Typography>
                <Box marginTop={3} sx={{ display: "flex" }}>
                    <img src="https://www.talab.org/wp-content/uploads/2016/05/123392016-talab-ir.jpg" height={350} width={550} alt="Nasir-al-mulk Mosque" />
                    <ImageCollage />
                </Box>
                <Box>
                    <Typography variant="h6" component="h4" marginTop={4}>
                        About this ticket
                    </Typography>
                    <Typography variant="paragraph" component="p" marginTop={1}>
                        Iran is a country of four seasons that attracts many tourists every year and many tourists travel to Iran. Each province has its own style and they treat you with their accent
                        and clothes. If you have never had the experience of traveling to the beautiful country of Iran, contact us.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" component="h4" marginTop={4} marginBottom={1}>
                        Frequently Asked Questions
                    </Typography>
                    <Accordian />
                </Box>
            </Container>
        </div>
    );
};
export default Tour;
