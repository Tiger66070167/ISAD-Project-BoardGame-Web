import {sequence} from "./state";
import state from "./state";
import {board_game, booking, food_menu, food_order, food_type, table_data, users} from "../../typeStorage/tableDatabase";


export default class select<T extends board_game | booking | food_menu | food_order | food_type | table_data | users | string> extends state<T> {
    private column: Array<string>;

    constructor(...column: T[]) {
        super()
        this.column = column;
    }

    makeQuery(stringQuery: string): string{
            stringQuery += " SELECT ";
            for (let i = 0; i < this.column.length - 1; i++) {
                stringQuery += `${this.column[i]}, `;
            }
            stringQuery += `${this.column[this.column.length - 1]} `;

            stringQuery += `FROM ${this.getTable()} `;

            let arrayWhere: Array<sequence> = this.getWhere();
            if (arrayWhere.length > 0) {
                stringQuery += "WHERE ";
                for (let i = 0; i < arrayWhere.length - 1; i++) {
                    if (typeof arrayWhere[i].check === "string") {
                        stringQuery += `${arrayWhere[i].column} ${arrayWhere[i].compare} "${arrayWhere[i].check}" AND`;
                    } else if (typeof arrayWhere[i].check === "number" || typeof arrayWhere[i].check === "boolean") {
                        stringQuery += `${arrayWhere[i].column} ${arrayWhere[i].compare} ${arrayWhere[i].check} AND `;
                    }
                }
                if (typeof arrayWhere[arrayWhere.length - 1].check === "string") {
                    stringQuery += `${arrayWhere[arrayWhere.length - 1].column} ${arrayWhere[arrayWhere.length - 1].compare
                        } "${arrayWhere[arrayWhere.length - 1].check}" `;
                } else if (
                    typeof arrayWhere[arrayWhere.length - 1].check === "number" || typeof arrayWhere[arrayWhere.length - 1].check === "boolean"
                ) {
                    stringQuery += `${arrayWhere[arrayWhere.length - 1].column} ${arrayWhere[arrayWhere.length - 1].compare
                        } ${arrayWhere[arrayWhere.length - 1].check} `;
                }
            }

            stringQuery += `;`;
            
            return stringQuery;
    }
}