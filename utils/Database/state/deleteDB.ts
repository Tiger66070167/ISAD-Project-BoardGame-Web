import { sequence } from "./state";
import state from "./state";
import { board_game, booking, food_menu, food_order, food_type, table_data, users } from "../table";

export default class deleteDB<T extends board_game | booking | food_menu | food_order | food_type | table_data | users> extends state<T> {
    constructor() { super() }

    makeQuery(stringQuery: string): string {
        stringQuery = "DELETE FROM ";
        stringQuery += this.getTable() + " ";

        let arrayWhere: Array<sequence> = this.getWhere();
        if (arrayWhere.length > 0) {
            stringQuery += "WHERE ";
            for (let i = 0; i < arrayWhere.length - 1; i++) {
                if (typeof arrayWhere[i].check === "string") {
                    stringQuery += `${arrayWhere[i].column} ${arrayWhere[i].compare} "${arrayWhere[i].check}" AND`;
                } else if (typeof arrayWhere[i].check === "number") {
                    stringQuery += `${arrayWhere[i].column} ${arrayWhere[i].compare} ${arrayWhere[i].check} AND`;
                }
            }
            if (typeof arrayWhere[arrayWhere.length - 1].check === "string") {
                stringQuery += `${arrayWhere[arrayWhere.length - 1].column} ${arrayWhere[arrayWhere.length - 1].compare
                    } "${arrayWhere[arrayWhere.length - 1].check}" `;
            } else if (
                typeof arrayWhere[arrayWhere.length - 1].check === "number"
            ) {
                stringQuery += `${arrayWhere[arrayWhere.length - 1].column} ${arrayWhere[arrayWhere.length - 1].compare
                    } ${arrayWhere[arrayWhere.length - 1].check} `;
            }
        }

        stringQuery += `;`;
        return stringQuery;
    }
}
