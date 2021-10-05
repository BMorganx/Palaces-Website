use palace_pizza_db;

create table admin (
    admin_id Int unsigned not null auto_increment,
    username Char(50) not null,
    password Char(50) not null,
    Primary Key (admin_id)
);

create table cater_menu_item (
    cater_menu_item_id Int unsigned not null auto_increment,
    name Char(50) not null,
    size_small Int(4) not null,
    size_large Int(4) not null,
    Primary Key (cater_menu_item_id)
);

create table customer (
    customer_id Int unsigned not null auto_increment,
    first_name Char(50) not null,
    last_name Char(50) not null,
    phone_number Char(50) not null,
    Primary Key (customer_id)
);

create table menu_item (
    menu_item_id Int unsigned not null auto_increment,
    menu_item_name Char(50) not null,
    item_description Text,
    price Float not null,
    combination Float,
    xl Float,
    addition Char(20),
    addition_price Float,
    image_name text,
    category Char(100),
    Primary Key (menu_item_id)
);

create table orders (
    order_id Int unsigned not null auto_increment,
    customer_id Int unsigned not null,
    order_status Char(30),
    order_date Date not null,
    total_price Float,
    Primary Key (order_id),
    Foreign Key (customer_id) References customer(customer_id)
);

create table order_menu_items (
    order_id Int unsigned not null,
    menu_item_id Int unsigned not null,
    quantity Int not null,
    price Char(30) not null,
    Primary Key (order_id, menu_item_id),
    Foreign Key (order_id) References orders(order_id),
    Foreign Key (menu_item_id) References menu_item(menu_item_id)
);

create table order_cater_items (
    order_id Int unsigned not null,
    cater_menu_item_id Int unsigned not null,
    quantity Int not null,
    price Float not null,
    Primary Key (order_id, cater_menu_item_id),
    Foreign Key (order_id) References orders(order_id),
    Foreign Key (cater_menu_item_id) References cater_menu_item(cater_menu_item_id)
);

insert into cater_menu_item values
    (1, 'Laab(raw or cooked)', 78, 155),
    (2, 'Seafood Laab', 80, 160),
    (3, 'Papaya Salad', 55, 90),
    (4, 'Chicken Wings', 60, 120),
    (5, 'Deep Fried Sausage', 55, 110),
    (6, 'Kow Pad', 55, 100),
    (7, 'Pad Thai', 58, 100),
    (8, 'Pad See Ew', 58, 100),
    (9, 'Pad Prik', 55, 100),
    (10, 'Pad Pak', 55, 100),
    (11, 'Pad Cashew Nut', 55, 100),
    (12, 'Pad Pak Curry', 55, 100),
    (13, 'Pad Ped', 55, 100),
    (14, 'Seafood Combination', 70, 160),
    (15, 'Crispy Jumbo Shrimp', 70, 160),
    (16, 'Royal Jumbo Shrimp', 70, 160),
    (17, 'Princess Jumbo Shrimp', 70, 160),
    (18, 'King Mussel', 70, 160),
    (19, 'Pad Boky Choy', 55, 100),
    (20, 'Sesame Chicken', 65, 110),
    (21, 'White Rice', 38, 50),
    (22, 'Sticky Rice', 50, 80);

insert into menu_item values
    (1, 'Cream Cheese Wontons', null, 4.95, null, null, null, null, null, 'Appetizers'),
    (2, 'Chicken Wings', null, 8.00, null, null, null, null, null, 'Appetizers'),
    (3, 'Pad Pak Curry', 'Combination of bell peppers, white onion, bamboo shoots, broccoli, carrots, and fresh mushrooms in zesty red curry sauce.', 11.50, 13.50, null, null, null, null, 'Thai Curry Dishes'),
    (4, 'Pad Ped', 'Stir-fry white onion, fresh mushrooms, and bell pepper in zest red curry sauce.', 11.50, 13.50, null, null, null, null, 'Thai Curry Dishes'),
    (5, 'Seafood Combination', 'Jumbo shrimp, crab meat & mussels, stir-fry with broccoli, water chestnut, and mushroom in special Thai brown sauce.', 14.00, null, null, null, null, null, 'Thai Seafood Dishes'),
    (6, 'King Mussel', 'Green mussels stir-fry with bell peppers, white onion, and sliced ginger in brown sauce.', 13.95, null, null, null, null, null, 'Thai Seafood Dishes'),
    (7, 'Royal Ginger Jumbo Shrimp', 'Jumbo shrimp stir-fry with bell pepper and white onion in brown sauce.', 13.95, null, null, null, null, null, 'Thai Seafood Dishes'),
    (8, 'Crispy Jumbo Shrimp', 'Jumbo shrimp battered and deep fried, tossed with onions and coriander.', 13.95, null, null, null, null, null, 'Thai Seafood Dishes'),
    (9, 'Princess Jumbo Shrimp', 'Jumbo shrimp stir-fry with green peppers, water chestnut, green onion, bamboo shoots, carrots, and brown sauce.', 13.95, null, null, null, null, null, 'Thai Seafood Dishes'),
    (10, 'Kow Pad', 'Fried rice with peas and carrots, green onions, and egg, topped with sunny side up egg. Served with special spicy sauce.', 10.50, 12.50, null, null, null, null, 'Traditional Thai Cuisine'),
    (11, 'Kow Pad Prik', 'Fried rice with broccoli, peas and carrots, green onions, and egg, topped with sunny side up egg. Served with special spicy sauce.', 10.50, 12.50, null, null, null, null, 'Traditional Thai Cuisine'),
    (12, 'Pad Thai', 'Fresh rice noodles stir-fried with bean sprouts, green onion, and egg. Topped with crushed peanuts and sliced cucumber.', 10.75, 12.75, null, null, null, null, 'Traditional Thai Cuisine'),
    (13, 'Pad See-Ew', 'Fresh rice noodles stir-fried with lettuce , green onion, bean sprouts, and egg. Served with sliced cucumber.', 10.75, 12.75, null, null, null, null, 'Traditional Thai Cuisine'),
    (14, 'Pad Prik', 'Bell pepper, white onion, water chestnut, and fresh mushrooms.', 10.15, 12.15, null, null, null, null, 'Traditional Thai Cuisine'),
    (15, 'Pad Pak', 'Stir-fry with napa, broccoli, carrots, water chestnuts, baby corn, and fresh mushrooms.', 10.15, 12.15, null, null, null, null, 'Traditional Thai Cuisine'),
    (16, 'Pad Normai', 'Bamboo shoots, carrots, green onions, and fresh mushrooms.', 10.15, 12.15, null, null, null, null, 'Traditional Thai Cuisine'),
    (17, 'Pad Cashew Nut', 'Roasted cashew nuts stir-fry with white onion, bell peppers, water chestnut, and fresh mushrooms.', 10.15, 12.15, null, null, null, null, 'Traditional Thai Cuisine'),
    (18, "Palace's Special Pho", 'Pho noodles, shrimp, fried pork, meatballs, and thinly sliced beef.', 11.00, null, 13.00, null, null, null, 'PHO & Soup'),
    (19, 'Seafood Pho', 'Pho noodles, shrimp, crab meat, and fish meatballs.', 13.00, null, 15.00, null, null, null, 'PHO & Soup'),
    (20, 'Regualr Pho', 'Pho noodles, beef meatballs, and thinly sliced beef.', 10.00, null, 12.00, null, null, null, 'PHO & Soup'),
    (21, 'House Special Soup (NO NOODLES)', 'Tripe, thinly sliced beef, coriander, and herbs in thin beef broth.', 10.00, null, null, null, null, null, 'PHO & Soup'),
    (22, 'House Special Soup (WITH NOODLES)', 'Tripe, thinly sliced beef, coriander, and herbs in thin beef broth with pho noodles.', 11.00, null, 13.00, null, null, null, 'PHO & Soup'),
    (23, 'Papaya Salad (Thai Style)', 'Shredded papaya with tomatoes, lime, ma kok, tamarind juice, fish sauce, crab sauce, and peanuts. (Choice of spice level)', 8.99, null, null, null, null, null, 'Salad'),
    (24, 'Cucumber Papaya Salad', 'Shredded cucumber with tomatoes, lime, ma kok, tamarind juice, fish sauce, crab sauce, and peanuts. (Choice of spice level)', 8.99, null, null, null, null, null, 'Salad'),
    (25, 'Seafood Papaya Salad', 'Shredded papaya with shrimp, tomatoes, lime, ma kok, tamarind juice, fish sauce, crab sauce, and peanuts. (Choice of spice level)', 10.99, null, null, null, null, null, 'Salad'),
    (26, 'Beef Laab', 'Ground beef tossed with oriental spices and herbs. (Choice of spice level and bitter level)', 14.99, null, null, null, null, null, 'Salad'),
    (27, 'Beef Raw Laab', 'Ground raw beef tossed with oriental spices and herbs. (Choice of spice level and bitter level)', 14.99, null, null, null, null, null, 'Salad'),
    (28, 'Seafood Laab', 'Shrimp and imitation crab tossed with herbs, green onions, cilantro, shredded carrots, and oriental spices. (Choice of spice level)', 15.99, null, null, null, null, null, 'Salad'),
    (29, 'Sesame Chicken', 'Breaded Chicken, sesame seeds, steamed broccoli, and special sauce.', 10.15, null, null, null, null, null, 'Other Entrees'),
    (30, 'Pad Bok Choy', 'Bok Choy stir-fry with green onion and choice of meat.', 10.15, null, null, null, null, null, 'Other Entrees'),
    (31, 'White Rice', null, 5.00, null, null, null, null, null, 'Rice & Combinations'),
    (32, 'Sticky Rice', null, 5.00, null, null, null, null, null, 'Rice & Combinations'),
    (33, 'Sausage Served With Sticky Rice', null, 8.00, null, null, 'One Sausage', 5.00, null, 'Rice & Combinations'),
    (34, 'Pork belly Served With Sticky Rice', null, 10.00, null, null, 'Pork Belly', 7.00, null, 'Rice & Combinations');

