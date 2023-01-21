import React, {useState} from "react";
import {FormLabel, Stack, TextField} from "@mui/material";
import {ServiceTable} from "./ServiceTable";

export function Main() {

    const [itemCost, setItemCost] = useState(0);

    function onItemCostChange(event: React.ChangeEvent<HTMLInputElement>) {
        setItemCost(parseFloat(event.target.value))
    }

    return (
        <Stack sx={{height: "100vh", padding: "1rem"}} spacing={2}>
            <Stack direction={"row"} alignItems={"center"}>
                Warenwert
                <TextField type={"number"}
                            size={"small"}
                           onChange={onItemCostChange}
                           sx={{width: 90, marginX: "1rem"}}
                />
            </Stack>

            <ServiceTable itemCost={itemCost}/>
        </Stack>
    )
        ;
}