import { boardGame } from "../../../typeStorage/boardType";
import fetcher from "../fetcher";

export default class boardFetcher extends fetcher {
    public async getAllBoard(): Promise<Array<boardGame>> {
        try {
            const data = await this.getFetcher("http://localhost:3000/api/board_game/getAllBoard");
            return data;
        } catch (error) {
            return [];
        }
    }

    public async changeStatus(board_game_id: number, status: boolean): Promise<boolean> {
        try {
            await this.patchFetcher("http://localhost:3000/api/board_game/changeBoard", {board_game_id, status});
            return true;
        } catch (error) {
            return false;
        }
    }

    public async addBoard(name: string, picture: File) {
        let data = new FormData();
        data.append("name", name);
        data.append("picture", picture);

        try {
            await this.postFetcher("http://localhost:3000/api/board_game/addBoard", data);
            return true;
        } catch (error) {
            return false;
        }
    }

    public async deleteBoard(board_game_id: number) {
        try {
            await this.deleteFetcher("http://localhost:3000/api/board_game/deleteBoard", {board_game_id})
            return true;
        } catch (error) {
            return false;
        }
    }

    public async changeBoard(board_game_id: number, name?: string, picture?: File) {
        try {
            if (!picture) {
                await this.patchFetcher("http://localhost:3000/api/board_game/changeBoard", {board_game_id, name})
            } else {
                let tmp = new FormData();
                tmp.append("board_game_id", ""+board_game_id);
                if (name) tmp.append("name", name);
                tmp.append("picture", picture);

                await this.patchFetcher("http://localhost:3000/api/board_game/changeBoardPic", tmp);
            }
            return true;
        } catch (error) {
            return false;
        }
        
    }

    public async getBoard(board_game_id: number) {
        try {
            let data = await this.getFetcher(`http://localhost:3000/api/board_game/${board_game_id}/getBoard`);
            return data;
        } catch (error) {
            return [];
        }
    }
}