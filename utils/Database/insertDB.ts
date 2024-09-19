import database from "./database";
import dbConnector from "./dbConnector";
import state from "./state";
import mysql from "mysql2/promise"

export default class insert implements state {
    private column: Array<string | number>;

    constructor(...value: any[]) {
        this.column = value;
    }

    async query(info: database) {
        try {
            let conn: mysql.Connection = await dbConnector.getConnection();
            conn.connect();
    
            let stringQuery: string = "INSERT INTO ";
            stringQuery += info.getTable() + " ";
    
            stringQuery += "VALUES (";
            for (let i = 0; i < this.column.length - 1; i++) {
                if (typeof this.column[i] === "number" || this.column[i] === "default" || this.column[i] === "DEFAULT") {
                    stringQuery += `${this.column[i]}, `;
                } else if (typeof this.column[i] === "string") {
                    stringQuery += `"${this.column[i]}", `;
                }
            }
            if (typeof this.column[this.column.length-1] === "number" || this.column[this.column.length-1] === "default" || this.column[this.column.length-1] === "DEFAULT") {
                stringQuery += `${this.column[this.column.length-1]});`;
            } else if (typeof this.column[this.column.length-1] === "string") {
                stringQuery += `"${this.column[this.column.length-1]}");`;
            } 
            
            conn.execute(stringQuery);
            conn.end();
        } catch (error) {
            console.log("There a bug here 🤓☝ AT 'insesrtDB.ts' line 39", error);
        }
    }
}