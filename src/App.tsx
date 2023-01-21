import React from 'react';
import './App.css';
import {ServiceTable} from "./components/ServiceTable";
import {Stack} from "@mui/material";


function App() {

    return (
        <Stack sx={{height: "100vh"}}>
            <ServiceTable itemCost={10} />
        </Stack>
    );
}


export default App;