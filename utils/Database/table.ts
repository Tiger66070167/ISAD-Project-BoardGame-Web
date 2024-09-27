export type board_game = 'board_game_id' | 'name' | 'description' | 'picture' | 'status';

export type booking = 'booking_id' | 'user_id' | 'table_id' | 'booking_from' | 'booking_to';

export type food_menu = 'food_id' | 'name' | 'type';

export type food_order = 'order_id' | 'table_id' | 'food_id' | 'status';

export type food_type = 'type_id' | 'type_name';

export type table_data = 'table_id' | 'name' | 'use_from' | 'use_to';

export type users = 'users_id' | 'username' | 'role' | 'email' | 'password' | 'created_at' | 'token';