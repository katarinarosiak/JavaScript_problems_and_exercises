-- 1. Write a SQL statement that will create the following table, people:

CREATE TABLE people (
  name varchar(255) NOT NULL,
  age int NOT NULL,
  occupation varchar(255)
);

-- 2. Write SQL statements to insert the data shown in #1 into the table.

INSERT INTO people (name, age, occupation)
  VALUES ('Abby', 34, 'biologist'), ('Mu''nisah', 26, NULL), ('Mirabelle', 40, 'contractor');

-- 3. Write 3 SQL queries that can be used to retrieve the second row of the table shown in #1 and #2.

SELECT * FROM people WHERE age = 26;

SELECT * FROM people WHERE name LIKE '%Mu''nisah%';

SELECT * FROM people WHERE occupation IS NULL;

-- 4. Write a SQL statement that will create a table named birds that can hold the following values:

CREATE TABLE birds (
  name varchar(255) NOT NULL, 
  length decimal(4, 1) NOT NULL, 
  wingspan decimal(4,1),
  family varchar(255),
  extinct boolean
);

-- 5. Using the table created in #4, write the SQL statements to insert the data as shown in the listing.

INSERT INTO birds 
  VALUES ('Spotted Towhee',	21.6,	26.7,	'Emberizidae',	false), ('American Robin',	25.5,	36.0,	'Turdidae',	false), ('Greater Koa Finch',	19.0,	24.0,	'Fringillidae',	true), ('Carolina Parakeet',	33.0,	55.8,	'Psittacidae',	true), ('Common Kestrel',	35.5,	73.5,	'Falconidae',	false)

-- 6. Write a SQL statement that finds the names and families for all birds that are not extinct, in order from longest to shortest (based on the length column's value).

SELECT name, family FROM birds WHERE extinct=false ORDER BY length DESC;


-- 7. Use SQL to determine the average, minimum, and maximum wingspan for the birds shown in the table.

SELECT ROUND(AVG(wingspan),1), MIN(wingspan), MAX(wingspan) FROM birds;  

-- 8. Write a SQL statement to create the table shown below, menu_items:

CREATE TABLE menu_items (
  item varchar(100),
  prep_time int,
  ingredient_cost decimal(5, 2),
  sales int,
  menu_price decimal(5,2)
);

-- 9. Write SQL statements to insert the data shown in #8 into the table.
INSERT INTO menu_items VALUES ('omelette',	10,	1.50,	182,	7.99), ('tacos',	5,	2.00,	254,	8.99), ('oatmeal',	1,	0.50,	79,	5.99);


-- 10. Using the table and data from #8 and #9, write a SQL query to determine which menu item is the most profitable based on the cost of its ingredients, returning the name of the item and its profit.

SELECT item, menu_price-ingredient_cost AS profit FROM menu_items ORDER BY profit DESC LIMIT 1;

-- 11. Write a SQL query to determine how profitable each item on the menu is based on the amount of time it takes to prepare one item. Assume that whoever is preparing the food is being paid $13 an hour. List the most profitable items first. Keep in mind that prep_time is represented in minutes and ingredient_cost and menu_price are in dollars and cents):

SELECT item, menu_price, ingredient_cost, round((13.00 / 60.00) * prep_time,2) AS labor, menu_price - ingredient_cost - round((13.00 / 60.00) * prep_time,2) AS profit FROM menu_items ORDER BY profit DESC;


SELECT 13.00/60.00 AS labor FROM menu_items;

