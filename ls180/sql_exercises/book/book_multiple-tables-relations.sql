-- 1. Make sure you are connected to the encyclopedia database. We want to hold the continent data in a separate table from the country data.

-- Create a continents table with an auto-incrementing id column (set as the Primary Key), and a continent_name column which can hold the same data as the continent column from the countries table.
-- Remove the continent column from the countries table.
-- Add a continent_id column to the countries table of type integer.
-- Add a Foreign Key constraint to the continent_id column which references the id field of the continents table.


CREATE TABLE continents (
  id serial,
  continent_name VARCHAR(50)
  PRIMARY KEY (id),
);

ALTER TABLE countries 
  DROP COLUMN continent;

ALTER TABLE countries
  ADD COLUMN continent_id INT;

ALTER TABLE countires
  ADD FOREIGN KEY (continent_id) 
    REFERENCES continents(id);





-- 2. Write statements to add data to the countries and continents tables so that the data below is correctly represented across the two tables. Add both the countries and the continents to their respective tables in alphabetical order.

INSER INTO TABLE continents (continent_name)
  VALUES ('Africa'), ('Asia'),
    ('Europe'), ('North America'),
    ('South America')


INSERT INTO TABLE countries 
  VALUES (DEFAULT, 'Brasil', 'Brasilia',	208385000,	5),
  (DEFAULT,'Egypt',	'Cairo',	96308900,	1),
  (DEFAULT,'France',	'Paris',	67158000,	3),
  (DEFAULT,'Germany',	'Berlin',	82349400,	3),
  (DEFAULT,'Japan',	'Tokyo',	126672000,	2)
  (DEFAULT,'USA',	'Washington D.C.',	325365189,	4);



-- 3. We want to create an albums table to hold all the above data except the singer name, and create a reference from the albums table to the singers table to link each album to the correct singer. Write the necessary SQL statements to do this and to populate the table with data. Assume Album Name, Genre, and Label can hold strings up to 100 characters. Include an auto-incrementing id column in the albums table.

CREATE TABLE albums (
  id serial, 
  album_name varchar(100),
  released date,
  genre varchar(100),
  label varchar(100)
  singer_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (singer_id)
    REFERENCES singers(id)
    ON DELETE CASCADE
)

ALTER TABLE singers 
  DROP COLUMN album_name, released, genre, lable;



-- 4. Connect to the ls_burger database. If you run a simple SELECT query to retrieve all the data from the orders table, you will see it is very unnormalised. We have repetition of item names and costs and of customer data.

-- We want to break this table up into multiple tables. First of all create a customers table to hold the customer name data and an email_addresses table to hold the customer email data. Create a one-to-one relationship between them, ensuring that if a customer record is deleted so is the equivalent email address record. Populate the tables with the appropriate data from the current orders table.

CREATE TABLE customers (
  id serial PRIMARY KEY, 
  customer_name varchar(100),
);

CREATE TABLE email_addresses (
  customer_id int, 
  email varchar(100),
  PRIMARY KEY (customer_id),
  FOREIGN KEY (customer_id)
    REFERENCES customers (id)
    ON DELETE CASCADE
);

INSERT TO customers (customer_name)
  VALUES ("Natasha O'Shea"), ("James Bergman"), 
  ("Aaron Muller");

INSERT TO email_addresses (customer_id, email)
  VALUES (1, "natasha@osheafamily.com"),
  (2, "james1998@email.com")
  ;

-- 5. We want to make our ordering system more flexible, so that customers can order any combination of burgers, sides and drinks. The first step towards doing this is to put all our product data into a separate table called products. Create a table and populate it with the following data:

-- //table
-- The table should also have an auto-incrementing id column which acts as its PRIMARY KEY. The product_type column should hold strings of up to 20 characters. Other than that, the column types should be the same as their equivalent columns from the orders table.

CREATE TABLE products (
  id serial, 
  product_name varchar(50),
  product_cost numeric(4,2) DEFAULT 0,
  product_type varchar(20),
  loyalty_points int,
  PRIMARY KEY (id)
)

INSERT INTO products (product_name, product_cost,product_type, loyalty_points)
  VALUES ("LS Burger",	3.00,	"Burger",	10),
  ("LS Cheeseburger",	3.50,	"Burger",	15),
  ("LS Chicken Burger",	4.50,	"Burger",	20),
  ("LS Double Deluxe Burger",	6.00,	"Burger",	30);

-- 6. To associate customers with products, we need to do two more things:

-- Alter or replace the orders table so that we can associate a customer with one or more orders (we also want to record an order status in this table).
-- Create an order_items table so that an order can have one or more products associated with it.
-- Based on the order descriptions below, amend and create the tables as necessary and populate them with the appropriate data.

-- James has one order, consisting of a Chicken Burger, Fries, Onion Rings, and a Lemonade. It has a status of 'In Progress'.

-- Natasha has two orders. The first consists of a Cheeseburger, Fries, and a Cola, and has a status of 'Placed'; the second consists of a Double Deluxe Burger, a Cheeseburger, two sets of Fries, Onion Rings, a Chocolate Shake and a Vanilla Shake, and has a status of 'Complete'.

-- Aaron has one order, consisting of an LS Burger and Fries. It has a status of 'Placed'.

-- Assume that the order_status field of the orders table can hold strings of up to 20 characters.

DROP TABLE orders;

CREATE TABLE orders (
  id serial, 
  customer_id int,
  order_status varchar(20), 
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id)
    REFERENCES customer (id) 
    ON DELETE CASCADE
);

CREATE TABLE order_items (
  id serial PRIMARY KEY,
  order_id int NOT NULL, 
  product_id int NOT NULL,
  FOREIGN KEY (order_id)
    REFERENCES orders (id),
    ON DELETE CASCADE,
  FOREIGN KEY (product_id)
    REFERENCES products (id)
    ON DELETE CASCADE
);

INSERT TO orders (customer_id, order_status)
  VALUES (1, 'In Progress'),
  (2, 'Placed'),
  (2, 'Complete'),
  (3, 'Placed');

  INSERT INTO order_items (order_id, product_id)
VALUES (1, 3),
(1, 5),
(1, 6),
(1, 8),
(2, 2),
(2, 5),
(2, 7),
(3, 4),
(3, 2),
(3, 5),
(3, 5),
(3, 6),
(3, 10),
(3, 9),
(4, 1),
(4, 5);