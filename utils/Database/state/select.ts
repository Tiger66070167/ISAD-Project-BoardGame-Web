import database, {sequence} from "../database";
import dbConnector from "../dbConnector";
import state from "./state";
import mysql from "mysql2/promise"
import {board_game, booking, food_menu, food_order, food_type, table_data, users} from "../table";

export default class select<T extends board_game | booking | food_menu | food_order | food_type | table_data | users> implements state {
    private column: Array<string>;

    constructor(...column: T[]) {
        this.column = column;
    }

    async query(info: database<any>){
        let conn: mysql.Connection = await dbConnector.getConnection();
        conn.connect();
        try {

            let stringQuery: string = "SELECT ";
            for (let i = 0; i < this.column.length - 1; i++) {
                stringQuery += `${this.column[i]}, `;
            }
            stringQuery += `${this.column[this.column.length - 1]} `;

            stringQuery += `FROM ${info.getTable()} `;

            let arrayWhere: Array<sequence> = info.getWhere();
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

            let result = await conn.execute(stringQuery);
            conn.end();
            
            return result[0];

        } catch (error) {
            console.log("There a bug here 🤓☝ AT 'selectDB.ts' line 55");
            conn.end();
        }
    }
}