import { User } from "src/app/register/Model/user";
import { IProperty } from "./IProperty";
import { Transaction } from "./ITransaction";

export interface Booking {
  id: number
  check_in_date: string
  check_out_date: string
  price_per_day: number
  price_per_stay: number
  tax_paid: number
  site_fees: number
  amount_paid: number
  is_refund: boolean
  cancel_date: string
  refund_paid: number
  effective_amount: number
  property: IProperty
  user: User
  transaction: Transaction
  }