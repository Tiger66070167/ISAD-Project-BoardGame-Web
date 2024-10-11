import { bookingData } from "../../../typeStorage/bookingType";
import { periodData } from "../../../typeStorage/periodType";
import { tableData } from "../../../typeStorage/tableType";
import fetcher from "../fetcher";

export default class bookingFetcher extends fetcher {
    public async getBooking(booking_id: number): Promise<Array<bookingData>> {
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
    public async addBooking(user_id: number, table_id: number, period_id: number, date: string): Promise<boolean> {
        try{
            await this.postFetcher("http://localhost:3000/api/booking/addBooking", {user_id, table_id, period_id, date});
            return true;
        }catch (error){
            return false;
        }
    }
    public async changeBooking(booking_id: number, user_id: number, table_id: number, period_id: number, date: string): Promise<boolean> {
        try {
            await this.patchFetcher("http://localhost:3000/api/booking/changeBooking", {booking_id, user_id, table_id, period_id, date})
            return true;
        } catch (error) {
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
//////////////////////////////////////////////////////////////////
    public async getBookingPeriod(period_id: number): Promise<Array<periodData>>{
        try {
            let data = await this.getFetcher(`http://localhost:3000/api/booking/period/${period_id}/getBookingPeriod`);
            return data;
        }catch(error){
            return [];
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
    public async addBookingPeriod(start: string, end: string): Promise<boolean> {
        try{
            await this.postFetcher("http://localhost:3000/api/booking/period/addBookingPeriod", {start, end});
            return true;
        }catch (error){
            return false;
        }
    }
    public async changeBookingPeriod(period_id: number, start: string, end: string): Promise<boolean> {
        try {
            await this.patchFetcher("http://localhost:3000/api/booking/period/changeBookingPeriod", {period_id, start, end});
            return true;
        } catch (error) {
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
//////////////////////////////////////////////
    public async getBookingTable(table_id: number): Promise<Array<tableData>>{
        try {
            let data = await this.getFetcher(`http://localhost:3000/api/booking/period/${table_id}/getBookingTable`);
            return data;
        }catch(error){
            return [];
        }
    }
    public async getAllBookingTable(): Promise<Array<tableData>>{
        try {
            let data = await this.getFetcher("http://localhost:3000/api/booking/table/getAllBookingTable");
            return data;
        } catch (error) {
            return [];
        }
    }
    public async addBookingTable(table_name: string, table_description: string): Promise<boolean> {
        try{
            await this.postFetcher("http://localhost:3000/api/booking/table/addBookingTable", {table_name, table_description});
            return true;
        }catch (error){
            return false;
        }
    }
    public async changeBookingTable(table_id: number, table_name: string, table_description: string): Promise<boolean> {
        try {
            await this.patchFetcher("http://localhost:3000/api/booking/period/changeBookingTable", {table_id, table_name, table_description});
            return true;
        } catch (error) {
            return false;
        }
    }
    public async deleteBookingTable(table_id: number): Promise<boolean> {
        try{
            await this.deleteFetcher("http://localhost:3000/api/booking/period/deleteBookingTable", {table_id});
            return true;
        }catch (error){
            return false;
        }
    }
}