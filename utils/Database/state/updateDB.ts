import database, {sequence} from "../database";
import state from "./state";
import mysql from "mysql2/promise";
import dbConnector from "../dbConnector";
import {board_game, booking, food_menu, food_order, food_type, table_data, users} from "../table";

export default class update implements state{
    private difference: Array<{current: string; change: string | number;}>;

    constructor() {
        this.difference = new Array<{current: string; change: string | number;}>;
    }

    public change(current: string, change: string | number): update {
        this.difference.push({current, change});
        return this;
    }

    async query(info: database<any>) {
        let conn: mysql.Connection = await dbConnector.getConnection();
        conn.connect();
        try {
    
            let stringQuery: string = "UPDATE ";
            stringQuery += `${info.getTable()} `;
    
            stringQuery += "SET ";
            for (let i = 0; i < this.difference.length-1; i++) {
                if (typeof this.difference[i].change === 'string') {
                    stringQuery += `${this.difference[i].current} = "${this.difference[i].change}", `                   
                } else if (typeof this.difference[i].change === 'number') {
                    stringQuery += `${this.difference[i].current} = ${this.difference[i].change}, `                   
                }
            }
            if (typeof this.difference[this.difference.length-1].change === 'string') {
                stringQuery += `${this.difference[this.difference.length-1].current} = "${this.difference[this.difference.length-1].change}" `                   
            } else if (typeof this.difference[this.difference.length-1].change === 'number') {
                stringQuery += `${this.difference[this.difference.length-1].current} = ${this.difference[this.difference.length-1].change} `                   
            }

            let arrayWhere: Array<sequence> = info.getWhere();
            if (arrayWhere.length > 0) {
                stringQuery += "WHERE "
                for (let i = 0; i < arrayWhere.length - 1; i++) {
                    if (typeof arrayWhere[i].check === 'string') {
                        stringQuery += `${arrayWhere[i].column} ${arrayWhere[i].compare} "${arrayWhere[i].check}" AND`;
                    } else if (typeof arrayWhere[i].check === 'number') {
                        stringQuery += `${arrayWhere[i].column} ${arrayWhere[i].compare} ${arrayWhere[i].check} AND`; 
                    }
                }
                if (typeof arrayWhere[arrayWhere.length-1].check === 'string') {
                    stringQuery += `${arrayWhere[arrayWhere.length-1].column} ${arrayWhere[arrayWhere.length-1].compare} "${arrayWhere[arrayWhere.length-1].check}" `;
                } else if (typeof arrayWhere[arrayWhere.length-1].check === 'number') {
                    stringQuery += `${arrayWhere[arrayWhere.length-1].column} ${arrayWhere[arrayWhere.length-1].compare} ${arrayWhere[arrayWhere.length-1].check} `; 
                }
            }
            stringQuery += `;`;

            conn.execute(stringQuery);
            conn.end();

            return true;

        } catch (error) {
            conn.end();
            throw error;
        }
    }
}