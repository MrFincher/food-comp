import React, {useState} from 'react';
import './App.css';
import {ServiceTable} from "./components/ServiceTable";
import {Stack, TextField} from "@mui/material";


function App() {

    const [itemCost, setItemCost] = useState(0);

    function onItemCostChange(event: React.ChangeEvent<HTMLInputElement>) {
            setItemCost(parseFloat(event.target.value))
    }

    return (
        <Stack sx={{height: "100vh", padding: "5rem"}} spacing={2}>
            <TextField type={"number"}
                       onChange={onItemCostChange}
                       label={"Warenwert"}
                       sx={{width: 140}}
            />
            <ServiceTable itemCost={itemCost} />
        </Stack>
    );
}


export default App;