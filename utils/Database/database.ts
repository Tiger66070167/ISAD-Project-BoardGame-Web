import dbConnector from "./dbConnector";
import select from "./state/select";
import state from "./state/state";

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
        try {
            const conn = await dbConnector.getConnection();
            if (isSelect) {
                let output = await conn.execute(stringQuery);
                return output[0];
            } else {
                await conn.execute(stringQuery);
            }
        } catch (error) {
            throw error;
        }

    }
}
