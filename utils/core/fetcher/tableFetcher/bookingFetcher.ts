import { bookingData } from "../../../typeStorage/bookingType";
import { periodData } from "../../../typeStorage/periodType";
import fetcher from "../fetcher";

export default class bookingFetcher extends fetcher {
    public async getBooking(booking_id: number) {
        try {
            let data = await this.getFetcher(`http://localhost:3000/api/booking/${booking_id}/getBooking`);
            return data;
        }catch(error){
            return [];
        }
    }

    public async getAllBooking(): Promise<Array<bookingData>> {
        try{
            let data = await this.getFetcher("http://localhost:3000/api/booking/getAllBooking");
            return data;
        } catch (error){
            return [];
        }
    }

    public async addBooking(user_id: number, table_id: number, period_id: number, date: string){
        try{
            await this.postFetcher("http://localhost:3000/api/booking/addBooking", {user_id, table_id, period_id, date});
            return true;
        }catch (error){
            return false;
        }
    }

    public async deleteBooking(booking_id: number): Promise<boolean> {
        try{
            await this.deleteFetcher("http://localhost:3000/api/booking/deleteBooking", {booking_id});
            return true;
        }catch (error){
            return false;
        }
    }

    public async getAllBookingPeriod(): Promise<Array<periodData>>{
        try{
            let data = await this.getFetcher("http://localhost:3000/api/booking/period/getAllBookingPeriod");
            return data;
        } catch (error){
            return [];
        }
    }
    public async addBookingPeriod(start: string, end: string){
        try{
            await this.postFetcher("http://localhost:3000/api/booking/period/addBookingPeriod", {start, end});
            return true;
        }catch (error){
            return false;
        }
    }

    public async deleteBookingPeriod(booking_id: number): Promise<boolean> {
        try{
            await this.deleteFetcher("http://localhost:3000/api/booking/period/deleteBookingPeriod", {booking_id});
            return true;
        }catch (error){
            return false;
        }
    }
}