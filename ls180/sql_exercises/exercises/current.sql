-- 1. Create tables for clients, products and sales. 


-- ALTER TABLE animals
--   DROP CONSTRAINT animals_weight_check;
  
-- ALTER TABLE animals 
--   ALTER COLUMN max_weight TYPE decimal(10, 4);

-- ALTER TABLE animals
--   ADD CONSTRAINT check_weight CHECK(max_weight BETWEEN 0.0001 AND 200000);

-- CREATE TABLE some_table(
--   name varchar(50) CHECK(length(name)> 1)
--   last_name varchar(100)
-- );
 
-- CREATE TABLE some_table(
--   id serial,
--   name varchar(100) DEFAULT 11
-- );

-- INSERT INTO countries (name, capital, population)
-- VALUES ('USA', 'Wahsington D.C.', 325365189),
-- ('Germany', 'Berlin', 82349400),
-- ('Japan', 'Tokyo', 126672000)
-- ;


-- '1949-09-23'

-- CREATE TABLE abc(
--   id serial, 
--   age decimal 
-- );

-- INSERT INTO animals (name, binomial_name, max_weight, max_age, conservation_status)
-- VALUES ('Golden Eagle',	'Aquila Chrysaetos',	6.35,	24,	'LC'),
-- ('Peregrine Falcon',	'Falco Peregrinus',	1.5,	15,	'LC'),
-- ('Pigeon',	'Columbidae Columbiformes',	2,	15,	'LC'), 
-- ('Kakapo',	'Strigops habroptila',	4,	60,	'CR');


-- INSERT INTO orders 
-- (customer_name, burger, side, drink, customer_email, customer_loyalty_points, burger_cost, side_cost, drink_cost)
-- VALUES 
-- ('James Bergman', 'LS Chicken Burger', 'Fries', 'Cola', 'james1998@email.com', 38, 4.50, 0.99, 1.50),
-- ('Natasha O''Shea', 'LS Cheeseburger', 'Fries', NULL, 'natasha@osheafamily.com', 18, 3.50, 0.99, NULL),
-- ('Natasha O''Shea', 'LS Double Deluxe Burger', 'Onion Rings', 'Chocolate Shake', 'natasha@osheafamily.com', 42, 6.00, 1.50, 2.00),
-- ('Aaron Muller', 'LS Burger', NULL, NULL, NULL, 10, 3.00, NULL, NULL);


-- ```jsx
-- SELECT name, age FROM students WHERE age = NULL;
-- ```

-- CREATE TABLE students (
--   id serial, 
--   name text,
--   age int
-- );

-- INSERT INTO students (name, age)
-- VALUES ('Johanson', 11), ('Eva B. Johanson', 22), ('Johanson Branson', NULL), ('johanson', NULL);

-- SELECT name FROM students WHERE name ILIKE '%Johanson';

-- SELECT name, last_name FROM celebrities 
--   WHERE occupation ILIKE '%singer%'
--   AND occupation ILIKE '%actor%' 
--       OR occupation ILIKE '%acrtress%';


-- SELECT customer_name, customer_email, customer_loyalty_points
-- FROM orders
--   WHERE customer_loyalty_points >= 20
--   ORDER BY customer_loyalty_points DESC;

-- SELECT burger FROM orders
--   WHERE customer_name LIKE 'Natasha O''Shea';

-- SELECT name FROM celebrities
--   WHERE date_part('day', date_of_birth) = '16';

-- CREATE TABLE students (
--   id serial, 
--   name text, 
--   year_of_birth date,
--   grade varchar(2)
-- );

-- INSERT INTO students (name, year_of_birth, grade)
--   VALUES ('Elenore', '1995-03-12', 'A-');
--   VALUES ('Elenore')


-- UPDATE students
-- 	SET classes = 'Math'
-- 		WHERE name = 'Eddie',
-- 	SET classes = 'Physics'
-- 		WHERE name = 'Maggie',
-- 	SET classes = 'History'
-- 		WHERE name = 'Elenore';
	
-- UPDATE students
-- 	SET classes = 'Math'
-- 		WHERE name = 'Eddie';

-- UPDATE students
-- 	SET classes = 'Physics'
-- 		WHERE name = 'Maggie';

-- UPDATE students
-- 	SET classes = 'History'
-- 		WHERE name = 'Elenore';
	
-- DELETE FROM singers 
--   WHERE occupation NOT ILIKE '%singer%'; 

-- UPDATE orders 
--   SET side = 'Fries'
--    WHERE id = 4;

-- UPDATE orders 
--   SET side_cost = 0.99
--    WHERE id = 4;

-- UPDATE orders 
--   SET customer_loyalty_points = 13
--     WHERE id = 4;



-- CREATE TABLE continents (
--   id serial PRIMARY KEY,
--   continent_name varchar(100)
-- );

-- ALTER TABLE countries 
--   DROP COLUMN continent;

-- ALTER TABLE countries 
--   ADD COLUMN continent_id int;

-- ALTER TABLE countries
--   ADD FOREIGN KEY (continent_id) REFERENCES continents (id);


-- INSERT INTO continents (continent_name)
--   VALUES ('Europe'), ('North Amercia'), ('Asia'), ('Africa'), ('South America');


-- INSERT INTO countries (name, capital, population, continent_id)
--   VALUES ('France',	'Paris',	67158000, 1),
--   ('USA',	'Washington D.C.',	325365189, 2),
--   ('Germany',	'Berlin',	82349400, 1),
--   ('Japan',	'Tokyo',	126672000, 3),
--   ('Egypt',	'Cairo',	96308900, 4),
--   ('Brazil',	'Brasilia',	208385000, 5);




-- CREATE TABLE albums (
--   id serial PRIMARY KEY,
--   album_name varchar(100),
--   released date, 
--   genre varchar(100),
--   label varchar(100),
--   singer_id int REFERENCES singers (id)
-- );

-- INSERT INTO ()
--   VALUES ();

-- Album Name	Released	Genre	Label	Singer Name

-- INSERT INTO albums (album_name, released, genre, label, singer_id) 
-- VALUES ('Born to Run', 'August 25, 1975', 'Rock and roll', 'Columbia', 'Bruce Springsteen'), ('Purple Rain', 'June 25, 1984', 'Pop, R&B, Rock', 'Warner Bros', 'Prince'), ('Born in the USA', 'June 4, 1984', 'Rock and roll, pop', 'Columbia', 'Bruce Springsteen'), ('Madonna', 'July 27, 1983', 'Dance-pop, post-disco', 'Warner Bros', 'Madonna'), ('True Blue', 'June 30, 1986', 'Dance-pop, Pop', 'Warner Bros', 'Madonna'), ('Elvis', 'October 19, 1956', 'Rock and roll, Rhythm and Blues', 'RCA Victor', 'Elvis Presley'), ('Sign o'' the Times', 'March 30, 1987', 'Pop, R&B, Rock, Funk', 'Paisley Park, Warner Bros', 'Prince'), ('G.I. Blues', 'October 1, 1960', 'Rock and roll, Pop', 'RCA Victor', 'Elvis Presley');


-- CREATE TABLE customers (
--   id serial PRIMARY KEY,
--   name varchar(100),
--   email varchar(100)
-- );

-- INSERT INTO customers (name, email) VALUES ('Natasha O''Shea',  'natasha@osheafamily.com'), ('James Bergman',  'james1998@email.com'), ('Aaron Muller',  NULL);

-- ALTER TABLE orders 
--   ADD COLUMN customer_id int REFERENCES customers (id);

-- UPDATE orders 
--   SET customer_id = 1
--     WHERE customer_name = 'Natasha O''Shea';

-- UPDATE orders 
--   SET customer_id = 2
--     WHERE customer_name = 'James Bergman';

-- UPDATE orders
--   SET customer_id = 3
--     WHERE customer_name = 'Aaron Muller';

-- ALTER TABLE orders 
--   DROP COLUMN customer_name,
--   DROP COLUMN customer_email,
--   DROP COLUMN customer_loyalty_points;

-- CREATE TABLE products (
--   id serial PRIMARY KEY, 
--   product_name varchar(100),
--   product_cost int, 
--   product_type varchar(50),
--   product_loyalty_points int
-- );

-- INSERT INTO products (product_name, product_cost, product_type, product_loyalty_points) VALUES ('LS Burger', 3.00, 'Burger', 10), ('LS Cheeseburger', 3.50, 'Burger', 15), ('LS Chicken Burger', 4.50, 'Burger', 20), ('LS Double Deluxe Burger', 6.00, 'Burger', 30), ('Fries', 1.20, 'Side', 3), ('Onion Rings', 1.50, 'Side', 5), ('Cola', 1.50, 'Drink', 5), ('Lemonade', 1.50, 'Drink', 5), ('Vanilla Shake', 2.00, 'Drink', 7), ('Chocolate Shake', 2.00, 'Drink', 7), ('Strawberry Shake', 2.00, 'Drink', 7);

-- DROP TABLE orders;

-- CREATE TABLE orders(
--   id serial PRIMARY KEY,
--   customer_id,
--   product_id
-- );

-- INSERT INTO orders (customer_id, product_id)
--   VALUES (1), (1), (1)



-- CREATE TABLE customers (
--   customer_id serial PRIMARY KEY, 
--   name varchar(100)
-- );

-- CREATE TABLE orders (
--   order_id serial PRIMARY KEY,
--   orders text,
--   customer_id int REFERENCES customers (customer_id)
-- );

-- INSERT INTO customers (name)
--   VALUES ('Johny', 'Ben', 'Gary');

-- INSERT INTO orders (orders, customer_id)
--   VALUES ('book', 1), ('mug', 2), ('chair', 3);


-- SELECT salary FROM employees 
--   WHERE employees.id = (SELECT employee_id FROM employee_birthday
--                         WHERE cake_preference = 'Chocolate');


-- INSERT INTO students (name)
--   VALUES ('Bob');


--   INSERT INTO addresses
--          (student_id, address, city)
--   VALUES (1, '1 Market Street', 'San Francisco'),
--          (2, '2 Elm Street', 'San Francisco'),
--          (3, '3 Main Street', 'Boston');

-- INSERT INTO addresses (student_id, address, city)
--   VALUES (1, '2 Park Road', 'San Francisco');


--   CREATE TABLE classes (
--     id serial PRIMARY KEY,
--     name text
--   );

--   CREATE TABLE students (
--     id serial,
--     name text,
--     class_id int,
--     PRIMARY KEY (id),
--     FOREIGN KEY (class_id) REFERENCES classes (id)
--   ); 

--   CREATE TABLE teachers (
--     id serial,
--     name text,
--     class_id int,
--     PRIMARY KEY (id),
--     FOREIGN KEY (class_id) REFERENCES classes (id)  
--   );

--   INSERT INTO teachers (name, class_id)
--     VALUES ('Peterson', 1), ('Ericsson', 2), ('Smith', 3), ('Rose', 4);

--   INSERT INTO classes (name)
--     VALUES ('math'), ('german'), ('physics');

--   INSERT INTO students (name, class_id)
--     VALUES ('Harry', 1), ('Ben', 2), ('Marry', 3), ('Marry', 2);


--   INSERT INTO students (name, class_id)
--      VALUES ('Mona', null);

-- INSERT INTO classes (name)
--   VALUES ('french')

-- SELECT students.name, classes.name
--   FROM students
--    JOIN classes
--     ON classes.id = students.class_id;

-- SELECT name  
--   FROM students 


--     SELECT students.name, classes.name, teachers.name
--     FROM students
--     INNER JOIN classes
--           ON classes.id = students.class_id
--     INNER JOIN teachers
--           ON teachers.class_id = classes.id;


--     SELECT name
--       FROM students 
--         WHERE students.class_id = (SELECT id FROM classes 
--                                     WHERE name = 'math');

--  name  
-- -------
--  Harry
-- (1 row)

-- SELECT countries.name, continents.continent_name
--   FROM countries 
--   JOIN continents
--     ON countries.continent_id = continents.id;

  
--   SELECT countries.name, countries.capital
--     FROM countries
--     JOIN continents
--     ON countries.continent_id = continents.id
--       WHERE continents.continent_name = 'Europe'; 


--   SELECT name 
--     FROM singers 
--     JOIN albums
--       ON singers.id = albums.singers_id
--       WHERE albums.label = 'Warner Bros';

-- SELECT singers.name, singers.last_name, albums.album_name, albums.released
--   FROM singers
--   JOIN albums
--     ON albums.singer_id = singers.id
--       WHERE singers.deceased = false AND albums.released BETWEEN '1980-01-01' AND '1989-01-01';

-- SELECT singers.name, singers.last_name
--   FROM singers
--   LEFT JOIN albums
--     ON singers.id = albums.singer_id
--     WHERE albums.singer_id IS NULL;


-- SELECT name, last_name
--   FROM singers
--     WHERE id NOT IN (SELECT singer_id
--                             FROM albums); 

-- SELECT orders.*, products.* 
--   FROM orders
--   JOIN products
--     ON products.order_id = orders.id;


--     order_items


-- ??????????????????????????????????????????????/






-- CREATE DATABASE animals;

-- CREATE TABLE birds (
--   id serial PRIMARY KEY,
--   name varchar(25),
--   age int,
--   species varchar(15)
-- );

-- INSERT INTO birds (name, age, species)
--   VALUES ('Charlie' ,   3, 'Finch'), ('Allie'   ,   5, 'Owl'),
--   ('Jennifer',   3, 'Magpie'), ('Jamie'  ,   4, 'Owl'),
--   ('Roy'     ,   8, 'Crow');

-- SELECT * FROM birds
--   WHERE age < 5;

-- UPDATE birds 
--   SET species = 'Raven'
--     WHERE id = 5;

-- SELECT * FROM birds 
--   WHERE species = 'Finch' and age = 3; 

-- DELETE FROM birds WHERE species = 'Finch' and age = 3; ;


-- ALTER TABLE birds
--    ADD CHECK(age > 0);

-- ALTER TABLE birds DROP CONSTRAINT "birds_age_check";


--     id      | integer               |           | not null | nextval('birds_id_seq'::regclass)
--  name    | character varying(25) |           |          | 
--  age     | integer               |           |          | 
--  species | character varying(15) |           |          | 
-- Indexes:
--     "birds_pkey" PRIMARY KEY, btree (id)
-- Check constraints:
--     "birds_age_check" CHECK (age > 0)

-- ALTER TABLE birds
--   ADD CONSTRAINT check_age CHECK (age > 0);

-- INSERT INTO birds (name, age, species)
--   VALUES ('Pigeaon', 0, 'Pigieaon');




-- DATA DEFINITION LABGUAGE 
-- CREATE DATABASE 
-- ALTER TABLE 

-- DATA MANIPULATION LANGUAGE 
-- INSERT 
-- SELECT
-- DELETE
-- UPDATE 


-- CREATE DATABASE extrasolar;

-- CREATE TABLE stars (
--   id serial PRIMARY KEY,
--   name varchar(25) UNIQUE NOT NULL,
--   distance int NOT NULL CHECK (distance > 0),
--   spectral_type varchar(1),
--   companions int NOT NULL CHECK (companions >= 0)
-- );

-- CREATE TABLE planets (
--   id serial PRIMARY KEY,
--   designation varchar(1) UNIQUE,
--   mass int
-- );

-- ALTER TABLE planets 
--   ADD COLUMN star_id int NOT NULL REFERENCES stars (id);

-- ALTER TABLE stars DROP COLUMN name;
-- ALTER TABLE stars ADD COLUMN name varchar(50) UNIQUE NOT NULL;

-- ALTER TABLE stars 
--   ALTER COLUMN name TYPE varchar(50);

-- ALTER TABLE stars 
--   ALTER COLUMN name TYPE varchar(25);



-- ALTER TABLE stars ALTER COLUMN distance TYPE numeric;

-- -- INSERT INTO students (name, year_of_birth, phone_num, average_points)
-- --   VALUES ('Harry',  '1987-02-04'  ,  909432987   ,  1),
-- --   ('Ben'  ,  '1976-11-13'  ,  099876567   ,  6),
-- --   ('Marry',  '1995-03-21'  ,  098787654   ,  7),
-- --   ('Marry',  '1995-03-21'  ,  908675356   ,  0);

-- ALTER TABLE stars 
--   DROP CONSTRAINT stars_spectral_type_check;

-- CREATE TYPE spectraltype as ENUM ('O', 'B', 'A', 'F', 'G', 'K','M');

-- ALTER TABLE stars 
--   ALTER COLUMN spectral_type TYPE spectraltype
--     USING spectral_type::spectraltype;


-- ALTER TABLE students 
--   ALTER COLUMN highest_grade DROP NOT NULL;

-- INSERT INTO students (name, year_of_birth, phone_num, average_points)
--   VALUES ('Edd', '1990-01-02', 123123432, 0.8);

-- ALTER TABLE planets 
--   ALTER COLUMN mass TYPE decimal;

-- ALTER TABLE planets 
--   ADD CHECK (mass > 0.0);

-- ALTER TABLE planets
--   ALTER COLUMN mass SET NOT NULL;

-- ALTER TABLE planets
--   ALTER COLUMN designation SET NOT NULL;

-- ALTER TABLE planets 
--   ADD COLUMN semi_major_axis numeric;

-- INSERT INTO stars (id, name, distance, spectral_type, companions)
--            VALUES (1, 'Alpha Centauri B', 4.37, 'K', 3);
-- INSERT INTO stars (name, distance, spectral_type, companions)
--            VALUES ('Epsilon Eridanii', 10.5, 'K', 0);

-- UPDATE planets 
--   SET semi_major_axis = 1


-- CREATE TABLE moons (
--   id serial PRIMARY KEY,
--   designation int NOT NULL CHECK (designation > 0),
--   semi_major_axis numeric CHECK (semi_major_axis > 0.0),
--   mass numeric CHECK (mass > 0.0),
--   planet_id int NOT NULL REFERENCES planets (id)

-- );



-- CREATE TABLE students (
-- 	id serial PRIMARY KEY,
-- 	name varchar(100),
--   year_of_birth date,
--   passed boolean DEFAULT true  
-- );   

-- INSERT INTO students (id, name, year_of_birth, passed)
--   VALUES (DEFAULT, 'John', NULL, DEFAULT);

-- INSERT INTO students 
--   VALUES (DEFAULT, 'John', NULL, DEFAULT);

-- INSERT INTO students (name, year_of_birth)
--   VALUES ('John');

-- INSERT INTO students 
--   VALUES (DEFAULT, 'John');

-- SELECT desert_name FROM desserts 
--   WHERE 

-- CREATE TABLE classes (
--   id serial PRIMARY KEY,
--   name text
-- );

-- CREATE TABLE students (
--   id serial PRIMARY KEY,
--   name text,
--   year_of_birth date
-- );

-- CREATE TABLE students_classes (
--   id serial PRIMARY KEY,
--   class_id int REFERENCES classes (id),
--   students_id int REFERENCES students (id)
-- );

-- INSERT INTO classes (name) 
--   VALUES ('math'), ('german'), ('physics'), ('french');

-- INSERT INTO students (name, year_of_birth)
--   VALUES ('Harry', '1987-02-04'), 
--   ('Ben', '1976-11-13'),
--   ('Marry', '1995-01-01');
--   VALUES ('John', '1994-07-08');

-- INSERT INTO students_classes (class_id, students_id)
--   VALUES (1,1), (2,2), (3,3), (2,3);

-- SELECT students.name, classes.name 
--   FROM students
--   FULL OUTER JOIN students_classes
--     ON students_classes.students_id = students.id
--     FULL OUTER JOIN classes
--       ON classes.id = students_classes.class_id;


-- SELECT 'canoe';
-- SELECT 'a long road';
-- SELECT 'weren''t';
-- SELECT '"No way!"';
-- |


-- SELECT 'Johny' || ' ' || 'likes' || ' ' || 'Mc Donald''s';
    
-- SELECT lower('ABCD');

-- SELECT 4 * 26.3 * 2,63

-- CREATE TABLE people (
--   name varchar(255),
--   age int,
--   occupation varchar(255)
-- ); 

-- INSERT INTO people
--   VALUES ('Abby', 34, 'biologist'),
--   ('Mu''nisah',	26,	NULL),
--   ('Mirabelle'	40,	'contractor');

-- SELECT * FROM people 
--   LIMIT 1 OFFSET 1; 


-- SELECT name, family   
--   FROM birds
--     WHERE extinct = false 
--     ORDER BY length DESC;

-- SELECT round(AVG(wingspan), 1), min(wingspan), max(wingspan)
--   FROM birds;

-- CREATE TABLE menu_items (
--   item text,
--   perp_time int,
--   ingredient_cost decimal,
--   sales int,
--   menu_price decimal
-- );

-- INSERT INTO menu_items 
--   VALUES ('omelette',	10,	1.50,	182,	7.99),
--   ('tacos',	5,	2.00,	254,	8.99),
--   ('oatmeal',	1,	0.50,	79,	5.99);




-- SELECT item AS name, (menu_price - ingredient_cost) AS profit 
--   FROM menu_items
--     ORDER BY profit DESC
--     LIMIT 1;

--   prep_time * 13/60 + ingredient_cost 

-- SELECT item, menu_price, ingredient_cost,
--     ROUND((13.00/60.00) * perp_time, 2) AS labor,
--     ROUND((menu_price - ((13.00/60.00) * perp_time) - ingredient_cost),2) AS profit
--   FROM menu_items
--   ORDER BY profit DESC;

-- ALTER TABLE films
--   ADD COLUMN director varchar(300),
--   ADD COLUMN duration int;

-- UPDATE films
--   SET director = 'John McTiernan',
--       duration = 132
--     WHERE title = 'Die Hard';

-- UPDATE films 
--   SET director = 'Michael Curtiz',
--       duration = 102
--     WHERE title = 'Casablanca';

-- UPDATE films 
--   SET director = 'Francis Ford Coppola',
--     duration = 113
--     WHERE title = 'The Conversation';

-- INSERT INTO films
--   VALUES ('1984',	1956,	'scifi',	'Michael Anderson',	90),
--   ('Tinker Tailor Soldier Spy',	2011,	'espionage',	'Tomas Alfredson'	,127),
--   ('The Birdcage',	1996,	'comedy',	'Mike Nichols',	118);

-- SELECT title,  2021 - "year" AS age 
--   FROM films 
--   ORDER BY age ASC; 

-- SELECT title, EXTRACT("year" FROM current_date) - "year" AS age
--   FROM films
--     ORDER BY age ASC;

-- SELECT title, duration 
--   FROM films
--     WHERE duration > 120
--     ORDER BY duration DESC;

-- SELECT title 
--   FROM films 
--     ORDER BY duration DESC
--     LIMIT 1; 

-- CREATE DATABASE residents; 

-- \i ~/Desktop/launch_school/core_curriculum/ls180/sql_exercises/course/residents.sql

--                                        Table "public.people"
--      Column     |         Type          | Collation | Nullable |              Default               
-- ----------------+-----------------------+-----------+----------+------------------------------------
--  id             | integer               |           | not null | nextval('people_id_seq'::regclass)
--  given_name     | text                  |           | not null | 
--  middle_initial | text                  |           |          | 
--  surname        | text                  |           | not null | 
--  street         | text                  |           | not null | 
--  city           | text                  |           | not null | 
--  state          | character varying(2)  |           | not null | 
--  zipcode        | character varying(5)  |           | not null | 
--  email          | text                  |           | not null | 
--  username       | text                  |           | not null | 
--  telephone      | character varying(12) |           | not null | 
--  birthday       | date                  |           | not null | 
--  occupation     | text                  |           | not null | 
--  company        | text                  |           |          | 
-- Indexes:
--     "people_pkey" PRIMARY KEY, btree (id)


-- SELECT substr(email, 'A') as domain, COUNT(id) 
--   FROM people 
--   GROUP BY domain
--   ORDER BY count DESC;

-- SELECT SPLIT_PART(email, '@', 2) as domain, COUNT(id) 
--   FROM people 
--   GROUP BY domain
--   ORDER BY count DESC;


-- DELETE FROM people
--   WHERE id = 3399;

-- DELETE FROM people  
--     WHERE state = 'CA';

-- UPDATE people 
--   SET given_name = upper(given_name)
--   WHERE email LIKE '%teleworm.us%'; 

-- SELECT * FROM people
--   WHERE email LIKE '%teleworm.us%'; 

-- DELETE FROM people;  

-- sql-course=# SELECT *, vacation_remaining * 15.50 * 8 AS amount FROM employees ORDER BY vacation_remaining DESC;
--  first_name | last_name | department | vacation_remaining | amount
-- ------------+-----------+------------+--------------------+---------
--  Leonardo   | Ferreira  | finance    |                 14 | 1736.00
--  Sara       | Mikaelsen | operations |                 14 | 1736.00
--  Lian       | Ma        | marketing  |                 13 | 1612.00
--  Haiden     | Smith     |            |                  0 |    0.00
-- (4 rows)

-- ALTER TABLE workers 
--   ALTER COLUMN department SET DEFAULT "unassigned";

-- UPDATE workers 
--   SET department = 'unassigned'
--     WHERE department is NULL;

-- ALTER TABLE workers
--   ALTER COLUMN department SET NOT NULL;

-- CREATE TABLE temperatures (
--   date DATE NOT NULL, 
--   low int NOT NULL,
--   high int NOT NULL
-- ); 

-- INSERT INTO temperatures 
--   VALUES
--    ('2016-03-01', 34, 43),
--  ('2016-03-02', 32, 44),
--  ('2016-03-03', 31, 47),
--  ('2016-03-04', 33, 42),
--  ('2016-03-05', 39, 46),
--  ('2016-03-06', 32, 43),
--  ('2016-03-07', 29, 32),
--  ('2016-03-08', 23, 31),
--  ('2016-03-09', 17, 28);


-- SELECT AVD()

--     date    | low | high 
-- ------------+-----+------
--  2016-03-01 |  34 |   43
--  2016-03-02 |  32 |   44
--  2016-03-03 |  31 |   47
--  2016-03-04 |  33 |   42
--  2016-03-05 |  39 |   46
--  2016-03-06 |  32 |   43
--  2016-03-07 |  29 |   32
--  2016-03-08 |  23 |   31
--  2016-03-09 |  17 |   28
-- (9 rows)

-- SELECT date, ROUND((low + high) /2.0 ,1) as average 
--   FROM temperatures
--     WHERE date BETWEEN '2016-03-2' AND '2016-03-08';

-- ALTER TABLE temperatures 
--   ADD COLUMN rainfall int DEFAULT 0;

-- UPDATE temperatures 
--   SET rainfall = FLOOR((low + high) /2.0 - 35.0)
--     WHERE ROUND((low + high) /2.0 ,1) > 35.00; 


-- SELECT high, ROUND((low + high) /2.0 ,1) AS average,
--   FLOOR((low + high) /2.0 - 35.0) as fall
--  FROM temperatures 
--   WHERE ROUND((low + high) /2.0 ,1) > 35.00;

-- ALTER TABLE temperatures
--   ALTER COLUMN rainfall TYPE decimal(4, 3);

-- UPDATE temperatures 
--   SET rainfall = FLOOR((low + high) /2.0 - 35.0)
--   WHERE ROUND((low + high) /2.0 ,1) > 35.00; 

-- UPDATE temperatures 
--   SET rainfall = rainfall * 0.039
--   WHERE ROUND((low + high) /2.0 ,1) > 35.00; 


--   0.0393701

--     date    | low | high | rainfall 
-- ------------+-----+------+----------
--  2016-03-07 |  29 |   32 |        0
--  2016-03-08 |  23 |   31 |        0
--  2016-03-09 |  17 |   28 |        0
--  2016-03-01 |  34 |   43 |        3
--  2016-03-02 |  32 |   44 |        3
--  2016-03-03 |  31 |   47 |        4
--  2016-03-04 |  33 |   42 |        2
--  2016-03-05 |  39 |   46 |        7
--  2016-03-06 |  32 |   43 |        2

--  CREATE TABLE employees (
--    name text, 
--    salary decimal(7, 2), 
--    to_pay decimal(7,2) 
--  );

--  INSERT INTO employees 
--   VALUES ('Chris Rock'  , 2000.00, 2000.00),
--   ('Benny George', 2500.00, 2500.00),
--   ('Melissa Fu'  , 3000.00, 3000.00);

-- UPDATE employees
-- SET salary = salary + (0.10 * salary),
-- to_pay = to_pay + (0.10 * salary);

-- ALTER TABLE temperatures
--   RENAME TO weather;

-- \d weather

-- customers,, seats, sections, tickets 

-- customers 
--  id | first_name | last_name |   phone    |                email                 
-- ----+------------+-----------+------------+--------------------------------------
--   1 | Malinda    | Luettgen  | 1830178263 | malinda.luettgen@hodkiewiczrobel.org
--   2 | Kevin      | Lehner    | 6298905698 | kevin.lehner@bergnaum.name
--   3 | Erik       | Rodriguez | 6445040698 | erik.rodriguez@larson.com
--   4 | Grover     | Larkin    | 1121572984 | grover.larkin@gerholdcummerata.biz
--   5 | Stuart     | Veum      | 2372496046 | stuart.veum@monahan.net
--   6 | Madelyn    | Bernier   | 5298846404 | madelyn.bernier@okeefe.info
--   7 | Allen      | Kling     | 7690215543 | allen.kling@lindgrenstokes.org
--   8 | Angel      | Corwin    | 1115407615 | angel.corwin@nicolascrona.info
--   9 | Herbert    | Nikolaus  | 7591544841 | herbert.nikolaus@cole.com
--  10 | Margarita  | Block     | 7700771425 | margarita.block@nolanrodriguez.name
-- (10 rows)

-- events 
--  id |            name            |      starts_at      | base_price 
-- ----+----------------------------+---------------------+------------
--   1 | Kool-Aid Man               | 2016-06-14 20:00:00 |      53.00
--   2 | Siren I                    | 2016-01-24 22:00:00 |      32.00
--   3 | Magnificent Stardust       | 2016-03-09 20:00:00 |      28.00
--   4 | A-Bomb                     | 2016-10-06 17:00:00 |      24.00
--   5 | Red Hope Summers the Fated | 2016-03-24 18:00:00 |      20.00
--   6 | Captain Deadshot Wolf      | 2016-05-20 17:00:00 |      47.00
--   7 | Green Husk Strange         | 2016-02-28 18:00:00 |      45.00
--   8 | Illustrious Firestorm      | 2016-10-21 19:00:00 |      44.00
--   9 | Red Magus                  | 2016-10-09 20:00:00 |      42.00
--  10 | Ultra Archangel IX         | 2016-05-23 18:00:00 |      44.00
-- (10 rows)

-- seats
--  id | section_id | row | number 
-- ----+------------+-----+--------
--   1 |          1 | A   |      1
--   2 |          1 | A   |      2
--   3 |          1 | A   |      3
--   4 |          1 | A   |      4
--   5 |          1 | A   |      5
--   6 |          1 | A   |      6
--   7 |          1 | A   |      7
--   8 |          1 | A   |      8
--   9 |          1 | A   |      9
--  10 |          1 | A   |     10
-- (10 rows)

-- sections 
--  id | code |     name      | price_multiplier 
-- ----+------+---------------+------------------
--   1 | ORCH | Orchestra     |            1.000
--   2 | BAL1 | Lower Balcony |            0.870
--   3 | BAL2 | Upper Balcony |            0.710
-- (3 rows)

-- tickets 
--  id | event_id | seat_id | customer_id 
-- ----+----------+---------+-------------
--   1 |        1 |     152 |        8528
--   2 |        1 |     153 |        8528
--   3 |        1 |     365 |        9571
--   4 |        1 |     395 |        7662
--   5 |        1 |     396 |        7662
--   6 |        1 |     397 |        7662
--   7 |        1 |     398 |        7662
--   8 |        1 |     240 |        6979
--   9 |        1 |     241 |        6979
--  10 |        1 |     411 |        5456
-- (10 rows)

-- SELECT ROUND((SELECT count(DISTINCT customer_id)
--         FROM tickets)::decimal / count(id)::decimal * 100, 2) as percentage 
--   FROM customers; 

--   (SELECT count(DISTINCT customer_id)
--         FROM tickets);

-- SELECT ROUND(count(DISTINCT customer_id) / count(DISTINCT customers.id)::decimal * 100, 2) as percent 
--   FROM customers  
--     LEFT JOIN tickets 
--       ON customers.id = tickets.customer_id;  


-- SELECT events.name as name, count(tickets.id) as popularity
--   FROM events
--     JOIN tickets
--     ON events.id = tickets.event_id
--     GROUP BY events.name
--     ORDER BY popularity DESC;


-- SELECT customer_id as id, customers.email, COUNT(DISTINCT event_id) 
--   FROM customers
--   JOIN tickets
--     ON customers.id = tickets.customer_id
--       GROUP BY customer_id, customers.email
--         HAVING COUNT(DISTINCT event_id) = 3;

-- statement 
-- -requirements: 
-- - column names
-- - ORDERED BY  

-- - all tickets purchased by customer with e mail

-- SELECT as event, as starts_at, as section, as row, as seat  
-- - WHERE/HAVING email =  'gennaro.rath@mcdermott.co'

-- SELECT events.name, events.starts_at, sections.name as section,
--   seats.row as row, seats.number as seat 
--   FROM customers
--   JOIN tickets
--     ON tickets.customer_id = customers.id
--       JOIN events
--       ON events.id = tickets.event_id
--         JOIN seats 
--           ON seats.id = tickets.seat_id
--         JOIN sections
--           ON seats.section_id = sections.id 
--       WHERE customers.email = 'gennaro.rath@mcdermott.co'; 

-- -- SELECT * FROM products;
-- \d orders

-- ALTER TABLE orders
--   ADD CONSTRAINT orders FOREIGN KEY (product_id) REFERENCES products (id);



-- INSERT INTO products (name)
--   VALUES ('small bolt'), ('large bolt');

-- INSERT INTO orders (product_id, quantity)
--   VALUES (1, 10), (1, 25), (1, 15);

-- SELECT orders.quantity, products.name
--   FROM orders
--   JOIN products
--     ON orders.product_id = products.id;

-- \d orders 

-- INSERT INTO orders (quantity)
--   VALUES (110);

-- DELETE FROM orders 
--   WHERE product_id IS NULL;

-- ALTER TABLE orders 
--   ALTER COLUMN product_id SET NOT NULL;

-- INSERT INTO orders (product_id, quantity)
--   VALUES (1, 110);


-- CREATE TABLE reviews (
--   id serial PRIMARY KEY,
--   review text,
--   product_id int REFERENCES products(id) NOT NULL
-- );

-- ALTER TABLE reviews 
--   ALTER COLUMN review SET NOT NULL;

-- ALTER TABLE reviews 
--   ALTER COLUMN product_id DROP NOT NULL;

-- INSERT INTO reviews (product_id, review)
--   VALUES (1, 'a little small'), (1,	'very round!'), (2,	'could have been smaller'); 

-- CREATE DATABASE phonebook;
-- \c phonebook; 

-- SELECT * FROM contacts; 

--  id |        when         | duration | contact_id 
-- ----+---------------------+----------+------------
--   1 | 2016-01-02 04:59:00 |     1821 |          6
--   2 | 2016-01-08 15:30:00 |      350 |         17
--   3 | 2016-01-11 11:06:00 |      111 |         25
--   4 | 2016-01-13 18:13:00 |     2521 |         25
--   5 | 2016-01-17 09:43:00 |      982 |         17
-- (5 rows)

--  id | first_name | last_name |   number   
-- ----+------------+-----------+------------
--   6 | William    | Swift     | 7204890809
--  17 | Yuan       | Ku        | 2195677796
--  25 | Tamila     | Chichigov | 5702700921
-- (3 rows)

-- INSERT INTO calls ("when", duration, contact_id)
--   VALUES ('2016-01-18 14:47:00', 632, 6);

-- SELECT "when", calls.duration, first_name
-- FROM calls
--   JOIN contacts
--     ON calls.contact_id = contacts.id
--     WHERE contacts.first_name NOT LIKE 'William' 
--       AND contacts.last_name NOT LIKE 'Swift';

-- INSERT INTO contacts (first_name, last_name, number)
--   VALUES ('Merve',	'Elk',	6343511126),
--   ('Sawa',	'Fyodorov',	6125594874);

-- INSERT INTO calls ("when", duration, contact_id)
--   VALUES ('2016-01-17 11:52:00',	175, 26),
--   ('2016-01-18 21:22:00',	79, 27);

-- SELECT * FROM contacts; 

-- ALTER TABLE contacts 
--   ADD CONSTRAINT unique_num UNIQUE (number);

-- SELECT * FROM contacts;

-- INSERT INTO contacts (first_name,last_name,number )
--   VALUES ('William', 'Swift' , 7204890809);

-- CREATE DATABASE books;
-- \c books;

-- \d categories

-- ALTER TABLE books_categories 
--   DROP COLUMN book_id, 
--   DROP COLUMN category_id;

-- DROP TABLE books_categories;

-- CREATE TABLE books_categories(
--   id serial PRIMARY KEY, 
--   books_id int REFERENCES books (id) ON DELETE CASCADE NOT NULL, 
--   categories int REFERENCES categories (id) ON DELETE CASCADE NOT NULL
-- ); 


-- ALTER TABLE books_categories 
--   DROP FOREIGN KEY (book_id),
--   DROP FOREIGN KEY (categories_id);


-- SELECT books.id, books.author, string_agg(categories.name, ', ') as categories
--   FROM books 
--     JOIN books_categories 
--       ON books.id = books_categories.books_id
--          JOIN categories 
--           ON categories.id = books_categories.category_id
--           GROUP BY books.author, books.id;
  
-- \c billing

-- CREATE TABLE customers(
--   id serial PRIMARY KEY,
--   name text NOT NULL,
--   payment_token char(8) CHECK (payment_token ~ '^[A-Z]{8}$')
-- );

-- CREATE TABLE services(
--   id serial PRIMARY KEY,
--   description text NOT NULL,
--   price numeric(10,2) NOT NULL CHECK (price >= 0.00)
-- );



-- CREATE TABLE customers_services(
--   id srial PRIMARY KEY, 
-- );

-- INSERT INTO customers (id, name, payment_token)
--   VALUES
--   (1, 'Pat Johnson  ', 'XHGOAHEQ'),
-- (2, 'Nancy Monreal', 'JKWQPJKL'),
-- (3, 'Lynn Blake   ', 'KLZXWEEE'),
-- (4, 'Chen Ke-Hua  ', 'KWETYCVX'),
-- (5, 'Scott Lakso  ', 'UUEAPQPS'),
-- (6, 'Jim Pornot   ', 'XKJEYAZA');

-- INSERT INTO services (id,description ,price)
--   VALUES 
-- (1 , 'Unix Hosting'   , 5.95),
-- (2 , 'DNS'               , 4.95),
-- (3 , 'Whois Registration', 1.95),
-- (4 , 'High Bandwidth'    , 15.00),
-- (5 , 'Business Support'  , 250.00),
-- (6 , 'Dedicated Hosting' , 50.00),
-- (7 , 'Bulk Email'        , 250.00),
-- (8 , 'One-to-one Training', 999.00);

-- SELECT * FROM customers;

-- CREATE TABLE customers_services(
--   id serial PRIMARY KEY, 
--   service_id int REFERENCES services (id),
--   customer_id int REFERENCES customers (id) ON DELETE CASCADE,
--   UNIQUE (service_id, customer_id) 
-- );

-- INSERT INTO customers_services (customer_id, service_id)
--   VALUES (1, 1), (1, 2), (1, 3),
--   (3, 1), (3, 2), (3, 3), (3, 4), (3, 5),
--   (4, 1), (4, 4),
--   (5, 1), (5, 2), (5, 6),
--   (6, 1), (6, 6), (6, 7); 

-- ALTER TABLE customers 
--   ADD CONSTRAINT unique_payment_token UNIQUE (payment_token);

-- ALTER TABLE customers_services
--   ALTER COLUMN customer_id SET NOT NULL, 
--   ALTER COLUMN service_id SET NOT NULL; 

-- SELECT DISTINCT customers.* 
--   FROM customers 
--     JOIN customers_services
--     ON customers_services.customer_id = customers.id;

SELECT DISTINCT customers.*, services.id, services.description, services.price 
  FROM customers 
    FULL OUTER JOIN customers_services
      ON customers_services.customer_id = customers.id
      FULL OUTER JOIN services 
        ON customers_services.service_id = services.id
        WHERE service_id IS NULL;
 