import { extname } from "path";
import compare from "./enumCompare";
import state from "./state/state";
import {board_game, booking, food_menu, food_order, food_type, table_data, users} from "./table"
import { table } from "console";
import insert from "./state/insertDB";
import select from "./state/select";

type table = 'board_game' | 'booking' | 'food_menu' | 'food_order' | 'food_type' | 'table_data' | 'users'
export type sequence = {
    column: string,
    compare: compare,
    check: string | number;
}

//TODO: add some generic here for better column search

export default class database<T extends board_game | booking | food_menu | food_order | food_type | table_data | users>{
    private queryTable: table | null;
    private state: state;
    private allSequence: Array<sequence>;

    constructor(state: state) {
        this.state = state;
        this.queryTable = null;
        this.allSequence = new Array<sequence>;
    }

    public table(table: table): database<T> {
        this.queryTable = table;
        return this;
    }

    public where(column: T, compare: compare, check: string | number): database<T> {
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
