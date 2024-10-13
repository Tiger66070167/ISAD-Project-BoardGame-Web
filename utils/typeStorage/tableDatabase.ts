export type board_game = 'board_game_id' | 'name' | 'picture' | 'status';

export type booking = 'booking_id' | 'user_id' | 'table_id' | 'period_id' | 'date';

export type booking_period = 'period_id' | 'start' | 'end';

export type food_menu = 'food_id' | 'name' | 'type' | 'description' | 'price' | 'picture';

export type food_order = 'order_id' | 'table_id' | 'food_id' | 'status' | 'amount';

export type food_type = 'type_id' | 'type_name';

export type table_data = 'table_id' | 'table_name' | 'table_description' | 'table_pic';

export type users = 'users_id' | 'username' | 'role' | 'email' | 'password' | 'created_at' | 'token' | 'picture' | 'first_name' | 'last_name' | 'phone';