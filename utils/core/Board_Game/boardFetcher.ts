import { boardGame } from "../../typeStorage/boardType";
import fetcher from "../fetcher";

export default class boardFetcher extends fetcher {
    public async getAllBoard(): Promise<Array<boardGame>> {
        return this.getFetcher("http://localhost:3000/api/board_game/getAllBoard");
    }
}