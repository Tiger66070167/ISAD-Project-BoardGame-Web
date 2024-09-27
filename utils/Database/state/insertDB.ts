import state from "./state";
import {board_game, booking, food_menu, food_order, food_type, table_data, users} from "../table"

export default class insert<T extends board_game | booking | food_menu | food_order | food_type | table_data | users> extends state<T> {
    private column: Array<string | number>;

    constructor(...value: any[]) {
        super();
        this.column = value;
    }

    makeQuery(stringQuery: string): string {
        stringQuery = "INSERT INTO ";
        stringQuery += this.getTable() + " ";

        stringQuery += "VALUES (";
        for (let i = 0; i < this.column.length - 1; i++) {
            if (typeof this.column[i] === "number" || this.column[i] === "default" || this.column[i] === "DEFAULT") {
                stringQuery += `${this.column[i]}, `;
            } else if (typeof this.column[i] === "string") {
                stringQuery += `"${this.column[i]}", `;
            }
        }
        if (typeof this.column[this.column.length - 1] === "number" || this.column[this.column.length - 1] === "default" || this.column[this.column.length - 1] === "DEFAULT") {
            stringQuery += `${this.column[this.column.length - 1]});`;
        } else if (typeof this.column[this.column.length - 1] === "string") {
            stringQuery += `"${this.column[this.column.length - 1]}");`;
        }

        return stringQuery;
    }
}