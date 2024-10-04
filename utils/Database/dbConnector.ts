import mysql from 'mysql2/promise';
const dotenv = require("dotenv")
dotenv.config()

// TODO: change database systme to use mysql.pool instead

export default class dbConnector {
    private static connection: mysql.Connection;
    
    constructor() {}
    
    public static async getConnection() {
        this.connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE,
            multipleStatements: true,
            connectTimeout: 1000000
        });
        return this.connection;
    }
}
