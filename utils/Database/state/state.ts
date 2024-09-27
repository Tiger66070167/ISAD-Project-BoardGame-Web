import {board_game, booking, food_menu, food_order, food_type, table_data, users} from "../table"
import compare from "../enumCompare";

export type table = 'board_game' | 'booking' | 'food_menu' | 'food_order' | 'food_type' | 'table_data' | 'users'
export type sequence = {
    column: string,
    compare: compare,
    check: string | number;
}

export default abstract class state<T extends board_game | booking | food_menu | food_order | food_type | table_data | users | string> {
    private queryTable: table | null;
    private allSequence: Array<sequence>;

    constructor() {
        this.queryTable = null;
        this.allSequence = new Array<sequence>;
    }

    public table(table: table): state<T> {
        this.queryTable = table;
        return this;
    }

    public where(column: T, compare: compare, check: string | number): state<T> {
        this.allSequence.push({column, compare, check});
        return this;
    }

    abstract makeQuery(stringQuery: string): string;

    public getTable(): table | null {
        return this.queryTable;
    }

    public getWhere(): Array<sequence> {
        return this.allSequence;
    }
}