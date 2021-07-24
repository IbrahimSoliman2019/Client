import { PromoCodes } from "./IPromoCodes";
import { User } from "./IUser";

export interface Transaction {
    id: number
    site_fees: number
    amount: number
    trancfer_on: string
    currency_id: number
    promo_code_id: number
    discount_amt: number
    promo_codes: PromoCodes
    recevier: User
  }