import mysql from 'mysql2/promise';

export default class dbConnector {
    private static connection: mysql.Connection;
    
    constructor() {}
    
    public static async getConnection() {
        if (!this.connection) {
            this.connection = await mysql.createConnection({
                host: "161.246.38.35",
                user: "it66070217_Anawat",
                password: "2005253",
                port: 3306,
                database: "it66070217_Anawat",
                connectTimeout: 1000000
            });
        }
        return this.connection;
    }
}
