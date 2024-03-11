import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary:{
            main: "#006d77",
            light: "#90e0ef",
            dark:"#0077b6"
        },
        secondary:{
            main: "#83c5be",
            light:"#caf0f8",
            dark:"#00b4d8"
        },
        error:{
            main:"#e29578"
        },
        mode:"light",
        background: {
            default:"#caf0f8"
        }
    },
    typography: {
        h3:{
            fontSize:"2.5rem"
        },
        h2: {
            fontSize:"3.2rem"
        }
    }
});

export {theme};