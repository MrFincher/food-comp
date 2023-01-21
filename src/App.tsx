import React from 'react';
import './App.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Main} from "./components/Main";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#484848"
        }
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Main/>
        </ThemeProvider>
    );
}

export default App;