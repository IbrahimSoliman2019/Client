export class Hoteldetail {

  constructor(
    public id?:number,
    public name?:string,
    public description?:string,
    public address?:string,
    public latitude?: string,
    public logitude?: string,
    public bedroom_count?: number,
    public bed_count?: number,
    public bathroom_count?: number,
    public accomodates_count?: number,
    public availability_tybe?: number,
    public start_date?: string,
    public end_date?: string,
    public price?: number,
    public price_tybe?: number,
    public minimum_stay?: number,
    public minimum_stay_tybe?: number,
    public refund_tybe?: number,
    public cityName?: string,
    public countryName?: string,
    public currencyName?: string,
    public propertybeName?: string,
    public stateName?: string) { }
}
