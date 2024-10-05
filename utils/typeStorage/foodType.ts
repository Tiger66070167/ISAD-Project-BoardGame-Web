export type foodMenu = {
    food_id: number,
    name?: string,
    type?: number,
    description?: string,
    price?: number,
    picture?: string
}

export type foodOrder = {
    order_id: number,
    table_id?: number,
    food_id?: number,
    status?: string,
    confirm?: boolean,
    amount?: number
}
