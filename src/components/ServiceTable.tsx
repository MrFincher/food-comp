import React from "react";
import {DataGrid, GridCellParams, GridValueGetterParams} from "@mui/x-data-grid";
import {Service} from "../types";
import {GridRenderCellParams} from "@mui/x-data-grid/models/params/gridCellParams";
import {GridColumns} from "@mui/x-data-grid/models/colDef/gridColDef";

export function ServiceTable({itemCost}: { itemCost: number }) {

    const maxSumId = "Lieferando"

    const services = [
        {
            name: "Lieferando",
            itemCost: itemCost,
            deliveryFee: 2.8,
            discountPercent: 10,
            discountAbsolute: 0,
            sum: undefined
        },
        {
            name: "Wolt",
            itemCost: itemCost,
            deliveryFee: 2,
            discountPercent: 0,
            discountAbsolute: 0,
            sum: undefined
        }
    ]

    return (
        <DataGrid
            columns={columns(maxSumId)}
            rows={services}
            getRowId={r => r.name}
            hideFooter
            hideFooterPagination
        />
    );
}

const columns = (minSumId: string) => [
    {field: "name", headerName: "Lieferant"},
    {field: "itemCost", headerName: "Warenwert"},
    {field: "deliveryFee", headerName: "Lieferkosten"},
    {field: "discountPercent", headerName: "Rabatt %", editable: true},
    {field: "discountAbsolute", headerName: "Rabatt €", editable: true},
    {
        field: "sum", headerName: "Summe",
        valueGetter: (params: GridValueGetterParams<Service, Service>) => {
            const s = params.row
            const base = s.itemCost - s.discountAbsolute
            return base * (1 - s.discountPercent / 100) + s.deliveryFee
        },
        renderCell: (params: GridRenderCellParams) => {
            if (params.id === minSumId) return params.value
            else return <strong>{params.value}</strong>
        }
    },
] as GridColumns<Service>