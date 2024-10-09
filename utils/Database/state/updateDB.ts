import { sequence } from "./state";
import { board_game, booking, food_menu, food_order, food_type, table_data, users } from "../../typeStorage/tableDatabase"
import state from "./state";

export default class update<T extends board_game | booking | food_menu | food_order | food_type | table_data | users> extends state<T> {
    private difference: Array<{ current: T; change: string | number | boolean; }>;

    constructor() {
        super();
        this.difference = new Array<{ current: T; change: string | number | boolean; }>;
    }

    public change(current: T, change: string | number | boolean): update<T> {
        this.difference.push({ current, change });
        return this;
    }

    makeQuery(stringQuery: string): string {
        stringQuery = "UPDATE ";
        stringQuery += `${this.getTable()} `;

        stringQuery += "SET ";
        for (let i = 0; i < this.difference.length - 1; i++) {
            if (typeof this.difference[i].change === 'number' || 
                typeof this.difference[i].change === 'boolean' ||
                this.difference[i].change === 'null' ||
                this.difference[i].change === 'NULL' ||
                this.difference[i].change === 'default' ||
                this.difference[i].change === 'DEFAULT'
            ) {
                stringQuery += `${this.difference[i].current} = ${this.difference[i].change}, `
            } else if (typeof this.difference[i].change === 'string') {
                stringQuery += `${this.difference[i].current} = "${this.difference[i].change}", `
            }
        }
        if (typeof this.difference[this.difference.length - 1].change === 'number' || 
            typeof this.difference[this.difference.length - 1].change === 'boolean' ||
            this.difference[this.difference.length - 1].change === 'null' ||
            this.difference[this.difference.length - 1].change === 'NULL' ||
            this.difference[this.difference.length - 1].change === 'default' ||
            this.difference[this.difference.length - 1].change === 'DEFAULT'
        ) {
            stringQuery += `${this.difference[this.difference.length - 1].current} = ${this.difference[this.difference.length - 1].change} `
        } else if (typeof this.difference[this.difference.length - 1].change === 'string') {
            stringQuery += `${this.difference[this.difference.length - 1].current} = "${this.difference[this.difference.length - 1].change}" `
        }

        let arrayWhere: Array<sequence> = this.getWhere();
        if (arrayWhere.length > 0) {
            stringQuery += "WHERE "
            for (let i = 0; i < arrayWhere.length - 1; i++) {
                if (typeof arrayWhere[i].check === 'number' || typeof arrayWhere[i].check === 'boolean') {
                    stringQuery += `${arrayWhere[i].column} ${arrayWhere[i].compare} ${arrayWhere[i].check} AND `;
                } else if (typeof arrayWhere[i].check === 'string') {
                    stringQuery += `${arrayWhere[i].column} ${arrayWhere[i].compare} "${arrayWhere[i].check}" AND `;
                }
            }
            if (typeof arrayWhere[arrayWhere.length - 1].check === 'number' || typeof arrayWhere[arrayWhere.length - 1].check === 'boolean') {
                stringQuery += `${arrayWhere[arrayWhere.length - 1].column} ${arrayWhere[arrayWhere.length - 1].compare} ${arrayWhere[arrayWhere.length - 1].check} `;
            } else if (typeof arrayWhere[arrayWhere.length - 1].check === 'string') {
                stringQuery += `${arrayWhere[arrayWhere.length - 1].column} ${arrayWhere[arrayWhere.length - 1].compare} "${arrayWhere[arrayWhere.length - 1].check}" `;
            }
        }
        stringQuery += `;`;

        return stringQuery;
    }
}