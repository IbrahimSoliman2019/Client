export interface Booking {
    id: number
    check_in_date: string
    check_out_date: string
    price_per_day: number
    price_per_stay: number
    tax_paid: number
    site_fees: number
    amount_paid: number
    is_refund: string
    cancel_date: string
    refund_paid: number
    transaction_id_fk: number
    effective_amount: number
    booking_date: string
  }