-- Let's start by creating a database. Create a new database called animals.
createdb animals

-- Now that we have an animals database, we can lay the groundwork needed to add some data to it.

-- Make a table called birds. It should have the following fields:

-- id (a primary key)
-- name (string with space for up to 25 characters)
-- age (integer)
-- species (a string with room for no more than 15 characters)

\c animals
CREATE TABLE birds(
  id serial PRIMARY KEY,
  name VARCHAR(25),
  age INT,
  species VARCHAR(15)
);

-- For this exercise, we'll add some data to our birds table. Add five records to this database so that our data looks like:

INSERT INTO birds(name, age, species)
  VALUES ('Charlie', 3, 'Finch'), ('Allie', 5, 'Owl'), 
  ('Jennifer', 3, 'Magpie'), ('Jamie', 4, 'Owl'),
  ('Roy', 8, 'Crow');

  -- or
  INSERT INTO birds
  VALUES (DEFAULT, 'Charlie', 3, 'Finch'), (DEFAULT,'Allie', 5, 'Owl'), 
  (DEFAULT, 'Jennifer', 3, 'Magpie'), (DEFAULT, 'Jamie', 4, 'Owl'),
  (DEFAULT, 'Roy', 8, 'Crow');

  --Write an SQL statement to query all data that is currently in our birds table.
  SELECT * FROM birds;

  -- In this exercise, let's practice filtering the data we want to query. Using a WHERE clause, SELECT records for birds under the age of 5.

  SELECT * FROM birds WHERE age < 5;

  -- It seems there was a mistake when we were inserting data in the birds table. One of the rows has a species of 'Crow', but that bird is actually a Raven. Update the birds table so that a row with a species of 'Crow' now reads 'Raven'.

  UPDATE birds 
    SET species = 'Raven'
    WHERE name = 'Roy';

-- Oops. Jamie isn't an Owl - he's a Hawk. Correct his information.

  UPDATE birds 
    SET species = 'Hawk'
    WHERE name = 'Jamie';

-- Write an SQL statement that deletes the record that describes a 3 year-old finch.

DELETE FROM birds WHERE species = 'Finch' AND age = 3;

-- When we initially created our birds table, we forgot to take into account a key factor: preventing certain values from being entered into the database. For instance, we would never find a bird that is negative n years old. We could have included a constraint to ensure that bad data isn't entered for a database record, but we forgot to do so.

-- For this exercise, write some code that ensures that only birds with a positive age may be added to the database. Then write and execute an SQL statement to check that this new constraint works correctly.

ALTER TABLE birds
  ADD CONSTRAINT check_age CHECK (age > 0);

INSERT INTO birds 
  VALUES ('test bird', -1, 'test');

-- It seems we are done with our birds table, and no longer have a need for it in our animals database. Write an SQL statement that will drop the birds table and all its data from the animals database.

DROP TABLE birds;

dropdb animals