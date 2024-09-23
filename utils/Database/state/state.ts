import database from "../database";

export default interface state {
    query(info: database<any>): any;
}