export type foodMenu = {
    food_id?: number,
    name?: string,
    type?: number
}

export type foodOrder = {
    order_id?: number,
    table_id?: number,
    food_id?: number,
    status?: string
}
