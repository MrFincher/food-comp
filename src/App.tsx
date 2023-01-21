import React, {useState} from 'react';
import './App.css';
import {ServiceTable} from "./components/ServiceTable";
import {createTheme, CssBaseline, Stack, TextField, ThemeProvider} from "@mui/material";
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