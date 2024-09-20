import database, { sequence } from "../database";
import dbConnector from "../dbConnector";
import state from "./state";
import mysql from "mysql2/promise";

export default class deleteDB implements state {
    constructor() { }

    async query(info: database) {
        let conn: mysql.Connection = await dbConnector.getConnection();
        conn.connect();
        try {

            let stringQuery: string = "DELETE FROM ";
            stringQuery += info.getTable() + " ";

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

            conn.execute(stringQuery);
            conn.end();

            return true;

        } catch (error) {
            console.log("There a bug here 🤓☝ AT 'deleteDB.ts' line 44");
            conn.end();
            return false;
        }
    }
}
