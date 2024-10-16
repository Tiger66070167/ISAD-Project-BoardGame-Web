export type foodMenu = {
    food_id: number,
    name?: string,
    type?: number | string,
    description?: string,
    price?: number,
    picture?: string
}

export type foodOrder = {
    order_id: number,
    table_id: number,
    food_id: number,
    status?: string,
    amount?: number
}
