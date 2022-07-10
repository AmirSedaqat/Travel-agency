import { Typography, Container, Box } from "@mui/material";

const Tour = () => {
    return (
        <div>
            <Container sx={{ width: "900px" }}>
                <Typography variant="h3" component="h1" marginTop={3}>
                    Explore the World in Shiraz
                </Typography>
                <Box marginTop={3} sx={{ display: "flex" }}>
                    <img src="https://i.redd.it/ymodeav1w5521.jpg" height={400} alt="Nasir-al-mulk Mosque" />
                </Box>
            </Container>
        </div>
    );
};
export default Tour;
