import compare from "./enumCompare";
import state from "./state";
import insert from "./insertDB";
import update from "./updateDB";

type table = 'board_game' | 'booking' | 'food_menu' | 'food_order' | 'table_data' | 'users'
export type sequence = {
    column: string,
    compare: compare,
    check: string | number;
}

export default class database{
    private queryTable: table | null;
    private state: state;
    private allSequence: Array<sequence>;

    constructor(state: state) {
        this.state = state;
        this.queryTable = null;
        this.allSequence = new Array<sequence>;
    }

    public table(table: table): database {
        this.queryTable = table;
        return this;
    }

    public where(column: string, compare: compare, check: string | number): database {
        this.allSequence.push({column, compare, check});
        return this;
    }

    public query() {
        this.state.query(this);
    }

    public getTable(): table | null {
        return this.queryTable;
    }

    public getWhere(): Array<sequence> {
        return this.allSequence;
    }
}

new database(new update().change("username", "nigga man").change("role", 'normal man')).table("users").where("users_id", compare.EQUAL, 6).query();