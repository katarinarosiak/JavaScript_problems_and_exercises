-- 1. Make sure you are connected to the encyclopedia database. Add a column to the animals table called class to hold strings of up to 100 characters.

-- Update all the rows in the table so that this column holds the value Aves.

/c encyclopedia
ALTER TABLE animals 
  ADD COLUMN class VARCHAR(100);

UPDATE animals
  SET class = 'Aves';

-- 2. Add two more columns to the animals table called phylum and kingdom. Both should hold strings of up to 100 characters.

-- Update all the rows in the table so that phylum holds the value Chordata and kingdom holds Animalia for all the rows in the table.

ALTER TABLE animals
  ADD COLUMN phylum VARCHAR(100),
  ADD COLUMN kingdom VARCHAR(100);

UPDATE animals
  SET phylum = 'Chordata',
  SET kingdom = 'Animalia';

-- 3. Add a column to the countries table called continent to hold strings of up to 50 characters.

-- Update all the rows in the table so France and Germany have a value of Europe for this column, Japan has a value of Asia and the USA has a value of North America.

ALTER TABLE countries
  ADD COLUMN continent VARCHAR(50);

UPDATE countries 
  SET continent = 'Europe' 
    WHERE name = 'France' OR name = 'Germany';

UPDATE TABLE countries 
  SET continent = 'Asia' WHERE name = 'Japan';

UPDATE TABLE countries
  SET continent = 'North America' WHERE name = 'USA';

-- 4. In the celebrities table, update the Elvis row so that the value in the deceased column is true. Then change the column so that it no longer allows NULL values.

UPDATE TABLE celebrities 
  SET deceased = true WHERE first_name = 'Elvis';

ALTER TABLE celebrities
  ALTER COLUMN deceased SET NOT NULL;

-- 5. Remove Tom Cruise from the celebrities table.

DELETE FROM celebrities WHERE firs_name = 'Tom' AND last_name = 'Cruise';

-- 6. Change the name of the celebrities table to singers, and remove anyone who isn't a singer.

ALTER TABLE celebrities RENAME TO singers;

DELETE FROM singers WHERE occupation NOT LIKE = '%singer%';


-- 7. Remove all the rows from the countries table.
DELETE * FROM countries; 

-- 8. Connect to the ls_burger database. Change the drink on James Bergman's order from a Cola to a Lemonade.

\c ls_burger 
UPDATE orders 
  SET drink = 'Lemondade' WHERE first_name = 'Janems' AND last_name = 'Bergman';


-- 9. Add Fries to Aaron Muller's order. Make sure to add the cost ($0.99) to the appropriate field and add 3 loyalty points to the current total.

UPDATE orders
  SET side = 'fries',
  cost = 0.99,
  customer_loyality_points = 13
  WHERE id = 4;

-- 10. The cost of Fries has increased to $1.20. Update the data in the table to reflect this.

UPDATE orders
  SET cost = 1.20 WHERE side = 'Fries';