1. Make sure you are connected to the encyclopedia database. We want to hold the continent data in a separate table from the country data.

Create a continents table with an auto-incrementing id column (set as the Primary Key), and a continent_name column which can hold the same data as the continent column from the countries table.
Remove the continent column from the countries table.
Add a continent_id column to the countries table of type integer.
Add a Foreign Key constraint to the continent_id column which references the id field of the continents table.

\c encyclopedia
CREATE TABLE continents(
  id serial PRIMARY KEY,
  continent_name VARCHAR(50)
);

ALTER TABLE countries 
  DROP COLUMN continent;

ALTER TABLE countries
  ADD COLUMN continent_id INT;

ALTER TABLE countires
  ADD FOREIGN KEY (continent_id) 
    REFERENCES continents(id);




2. Write statements to add data to the countries and continents tables so that the data below is correctly represented across the two tables. Add both the countries and the continents to their respective tables in alphabetical order.

table...

3. ...

4. Connect to the ls_burger database. If you run a simple SELECT query to retrieve all the data from the orders table, you will see it is very unnormalised. We have repetition of item names and costs and of customer data.

We want to break this table up into multiple tables. First of all create a customers table to hold the customer name data and an email_addresses table to hold the customer email data. Create a one-to-one relationship between them, ensuring that if a customer record is deleted so is the equivalent email address record. Populate the tables with the appropriate data from the current orders table.


5. We want to make our ordering system more flexible, so that customers can order any combination of burgers, sides and drinks. The first step towards doing this is to put all our product data into a separate table called products. Create a table and populate it with the following data:

//table
The table should also have an auto-incrementing id column which acts as its PRIMARY KEY. The product_type column should hold strings of up to 20 characters. Other than that, the column types should be the same as their equivalent columns from the orders table.

6. To associate customers with products, we need to do two more things:

Alter or replace the orders table so that we can associate a customer with one or more orders (we also want to record an order status in this table).
Create an order_items table so that an order can have one or more products associated with it.
Based on the order descriptions below, amend and create the tables as necessary and populate them with the appropriate data.

James has one order, consisting of a Chicken Burger, Fries, Onion Rings, and a Lemonade. It has a status of 'In Progress'.

Natasha has two orders. The first consists of a Cheeseburger, Fries, and a Cola, and has a status of 'Placed'; the second consists of a Double Deluxe Burger, a Cheeseburger, two sets of Fries, Onion Rings, a Chocolate Shake and a Vanilla Shake, and has a status of 'Complete'.

Aaron has one order, consisting of an LS Burger and Fries. It has a status of 'Placed'.

Assume that the order_status field of the orders table can hold strings of up to 20 characters.