// columns.ts
import { ColumnDef } from "@tanstack/react-table"
import { foodOrder } from "../../../../utils/typeStorage/foodType"; // Import the type


export const columns: ColumnDef<foodOrder>[] = [
    {
        accessorKey: "order_id",
        header: "Order ID",
    },
    {
        accessorKey: "table_id",
        header: "Table ID",
    },
    {
        accessorKey: "food_id",
        header: "Food ID",
    },
    // {
    //     accessorKey: "status",
    //     header: "Status",
    // },
    {
        accessorKey: "amount",
        header: "Amount",
    },

];