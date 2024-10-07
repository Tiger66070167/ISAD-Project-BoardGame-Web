import fetcher from "../fetcher";

export default class accountFetcher extends fetcher {
    public async getAccount(users_id: number) {
        try {
            let data = await this.getFetcher(`http://localhost:3000/api/account/${users_id}/getAccount`);
            return data;
        } catch (error) {
            return [];
        }
    }
}