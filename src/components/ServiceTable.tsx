import React, {useState} from "react";
import {DataGrid, GridValueGetterParams} from "@mui/x-data-grid";
import {Service} from "../types";
import {GridRenderCellParams} from "@mui/x-data-grid/models/params/gridCellParams";
import {GridColumns} from "@mui/x-data-grid/models/colDef/gridColDef";

export function ServiceTable({itemCost}: { itemCost: number }) {

    const [services, setServices] = useState(initServices)

    const getMinSum = () => {
        let min = 999999999999
        services.forEach(s => min = Math.min(calcSum(itemCost, s), min))
        return min
    }

    const minSum = getMinSum()

    console.log(minSum)

    const updateService = (service: Service) => {
        const others = services.filter(s => s.id != service.id)
        others.push(service)
        others.sort((a, b) => b.id - a.id)
        setServices(others)
        console.log(others)
        return service
    }

    return (
        <DataGrid
            columns={columns(minSum, itemCost)}
            rows={services}
            rowCount={services.length}
            hideFooter
            hideFooterPagination
            autoHeight
            processRowUpdate={(row,_) => updateService(row)}
        />
    );
}

const columns = (minSum: number, itemCost: number) => [
    {field: "name", headerName: "Lieferant"},
    {field: "itemCost", headerName: "Warenwert", valueGetter: () => itemCost},
    {field: "deliveryFee", headerName: "Lieferkosten", editable: true},
    {field: "discountPercent", headerName: "Rabatt %", editable: true},
    {field: "discountAbsolute", headerName: "Rabatt €", editable: true},
    {
        field: "sum", headerName: "Summe",
        valueGetter: (params: GridValueGetterParams<Service, Service>) => {
           return calcSum(itemCost, params.row);
        },
        renderCell: (params: GridRenderCellParams<number, Service>) => {
            if (calcSum(itemCost, params.row) === minSum) {
                return <strong>{params.value}</strong>
            }
            else {
                return params.value
            }
        }
    },
] as GridColumns<Service>

const initServices = [
    {
        id: 1,
        name: "Lieferando",
        itemCost: undefined,
        deliveryFee: 2.8,
        discountPercent: 10,
        discountAbsolute: 0,
        sum: undefined
    },
    {
        id: 2,
        name: "Wolt",
        itemCost: undefined,
        deliveryFee: 2,
        discountPercent: 0,
        discountAbsolute: 0,
        sum: undefined
    },
    {
        id: 3,
        name: "Uber",
        itemCost: undefined,
        deliveryFee: 2,
        discountPercent: 0,
        discountAbsolute: 0,
        sum: undefined
    }
]

const calcSum = (itemCost: number, s: Service) => {
    const base = itemCost - s.discountAbsolute
    const res = base * (1 - s.discountPercent / 100) + s.deliveryFee
    return Math.round(res * 100) / 100;
}