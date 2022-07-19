import * as React from "react";
//MUI
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LoginIcon from '@mui/icons-material/Login';
//react-router-dom
import { Link } from "react-router-dom";
//images & gif
import LOGOWEB from "../assets/LOGOWEB.png";
import travelGif from "../assets/Travel.gif";

//Styles
import styles from '../Styles/AppBar.module.css'
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));



const SearchAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 ,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <AppBar position="static" sx={{ backgroundColor: "rgb(222, 84, 60)" }}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 1 }} className={styles.menuIcon}>
                        <MenuIcon />
                    </IconButton>
                    <Typography  variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                        <Link to="/">
                            <img src={travelGif} alt="Logo" style={{ height: "60px", position: "relative", top: "5px" }} className={styles.logoL} /> <img className={styles.sedaghatTravelAgency} src={LOGOWEB} alt="Logo Large" />
                        </Link>
                    </Typography>
<Box className={styles.containerLink}>

                    <Link to="/" className={styles.Navlink}><HomeIcon /> <span>HOME</span> </Link>
                    <a href="https://github.com/AmirSedaqat/Travel-agency.git" target="_blank" className={styles.Navlink}><GitHubIcon />  <span>GITHUB</span></a>
                    <Link to="/signup" className={styles.Navlink}><LoginIcon />  <span>SIGNUP  |  LOGIN</span></Link>

</Box>
                    <Link to="/"><img src={travelGif} alt="Logo" className={styles.logoM}/></Link>
                    <Search className={styles.search}>
                        <SearchIconWrapper className={styles.icon}>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} className={styles.input}/>
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default SearchAppBar;
