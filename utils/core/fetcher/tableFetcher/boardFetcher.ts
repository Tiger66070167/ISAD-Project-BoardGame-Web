import { boardGame } from "../../../typeStorage/boardType";
import fetcher from "../fetcher";

export default class boardFetcher extends fetcher {
    public async getAllBoard(): Promise<Array<boardGame>> {
        return this.getFetcher("http://localhost:3000/api/board_game/getAllBoard");
    }

    public async changeStatus(board_game_id: number, status: boolean): Promise<boolean> {
        try {
            await this.patchFetcher("http://localhost:3000/api/board_game/changeBoard", {board_game_id, status});
            return true;
        } catch (error) {
            return false;
        }
    }
}