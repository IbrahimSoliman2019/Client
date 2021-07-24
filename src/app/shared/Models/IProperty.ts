import { Booking } from "./IBooking";
import { PropertyAmenity } from "./IPropertyAmenity";
import { PropertyImage } from "./IPropertyImage";
import { PropertyReview } from "./IPropertyReview";
import { Transaction } from "./ITransaction";
import { User } from "./IUser";

export interface IProperty {
    id: number
    name: string
    description: string
    address: string
    latitude: string
    logitude: string
    bedroom_count: string
    bed_count: string
    bathroom_count: string
    accomodates_count: string
    availability_tybe: number
    start_date: string
    end_date: string
    price: number
    price_tybe: number
    minimum_stay: string
    minimum_stay_tybe: number
    refund_tybe: number
    bookings: Booking[]
    cityName: string
    countryName: string
    currencyName: string
    propertybeName: string
    stateName: string
    user: User
    property_amenities: PropertyAmenity[]
    property_images: PropertyImage[]
    property_reviews: PropertyReview[]
    transactions: Transaction[]
  }