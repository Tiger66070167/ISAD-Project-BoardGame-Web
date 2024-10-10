import {board_game, booking, booking_period, food_menu, food_order, food_type, table_data, users} from "../../typeStorage/tableDatabase"
import compare from "../enumCompare";

export type table = 'board_game' | 'booking' | 'food_menu' | 'food_order' | 'food_type' | 'table_data' | 'users' | 'booking_period'
export type sequence = {
    column: string,
    compare: compare,
    check: string | number | boolean;
}

export default abstract class state<T extends board_game | booking | food_menu | food_order | food_type | table_data | users | booking_period | string> {
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

    public where(column: T, compare: compare, check: string | number | boolean): state<T> {
        this.allSequence.push({column, compare, check});
        return this;
    }

    abstract makeQuery(stringQuery: string): string;

    protected getTable(): table | null {
        return this.queryTable;
    }

    protected getWhere(): Array<sequence> {
        return this.allSequence;
    }
}