import dbConnector from "./dbConnector";
import select from "./state/select";
import state from "./state/state";
import db from "./db";
import mysql, { Pool } from 'mysql2/promise';

export default class database{
    private state: Array<state<any>>;

    constructor(...state: Array<state<any>>) {
        this.state = state;
    }

    public async query(): Promise<any> {
        // make SQL command
        let stringQuery: string = '';
        let isSelect: boolean = false;
        for (let i = 0; i < this.state.length; i++) {
            if (this.state[i] instanceof select) isSelect = true;
            stringQuery += this.state[i].makeQuery(stringQuery) + " ";
        }

        console.log(stringQuery); //TODO: delete this

        // make connection
        const pool: Pool | undefined = await db.get();
        let conn = await pool!.getConnection();
        try {
            if (isSelect) {
                let output: any = await conn.query(stringQuery);
                return Array.from((this.state.length > 1) ? output[0][0] : output[0]);
            } else {
                await conn.query(stringQuery);
            }
        } catch (error) {
            throw error;
        } finally {
            conn.release();
        }
    }
}