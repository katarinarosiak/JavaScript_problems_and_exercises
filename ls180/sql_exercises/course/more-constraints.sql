-- 1. Import this file into a PostgreSQL database.
$ psql -d sql-course < films2.sql

-- 2. Modify all of the columns to be NOT NULL.

ALTER TABLE films 
  ALTER COLUMN title 
    SET NOT NULL;
ALTER TABLE films
    ALTER COLUMN year 
    SET NOT NULL;
ALTER TABLE films
      ALTER COLUMN genre 
    SET NOT NULL;
ALTER TABLE films
      ALTER COLUMN director 
    SET NOT NULL;
ALTER TABLE films
      ALTER COLUMN duration 
    SET NOT NULL;

    -- 3. How does modifying a column to be NOT NULL affect how it is displayed by \d films?
    The nullable column shows NOT NULL

    -- 4. Add a constraint to the table films that ensures that all films have a unique title.

 ALTER TABLE films ADD CONSTRAINT title_unique UNIQUE (title);

  -- 5. How is the constraint added in #4 displayed by \d films?
  It is displayed under 'indexes' like so:
  Indexes:
    "title_unique" UNIQUE CONSTRAINT, btree (title)

  -- 6. Write a SQL statement to remove the constraint added in #4.
  ALTER TABLE films
      DROP CONSTRAINT unique_title;

  -- 7. Add a constraint to films that requires all rows to have a value for title that is at least 1 character long.

ALTER TABLE films
  ADD CONSTRAINT long_char CHECK(length(title) > 1);

  -- 8. What error is shown if the constraint created in #7 is violated? Write a SQL INSERT statement that demonstrates this.

  INSERT INTO films 
    VALUES ('', 1990, 'action', 'nobody', 121);

The error: 
ERROR:  new row for relation "films" violates check constraint "long_char"
DETAIL:  Failing row contains (, 1990, action, nobody, 121).

-- 9. How is the constraint added in #7 displayed by \d films?

The constrain is displayed as follows: 

Check constraints:
    "long_char" CHECK (length(title::text) > 1)

-- 10. Write a SQL statement to remove the constraint added in #7.

ALTER TABLE films
  DROP CONSTRAINT long_char;

  -- 11. Add a constraint to the table films that ensures that all films have a year between 1900 and 2100.

ALTER TABLE films
  ADD CONSTRAINT right_year CHECK (year BETWEEN 1900 AND 2100);

-- 12. How is the constraint added in #11 displayed by \d films?
Check constraints:
    "long_char" CHECK (length(title::text) > 1)
    "right_year" CHECK (year >= 1900 AND year <= 2100)


-- 13. Add a constraint to films that requires all rows to have a value for director that is at least 3 characters long and contains at least one space character ().

ALTER TABLE films 
  ADD CONSTRAINT char_len 
  CHECK (length(director) >= 3 AND  POSITION(' ' in director) > 0);

-- 14 How does the constraint created in #13 appear in \d films?

Check constraints:
    "char_len" CHECK (length(director::text) >= 3 AND "position"(director::text, ' '::text) > 0)

-- 15. Write an UPDATE statement that attempts to change the director for "Die Hard" to "Johnny". Show the error that occurs when this statement is executed.

UPDATE films 
  SET director = 'Johnny' WHERE title='Die Hard';

Error:
ERROR:  new row for relation "films" violates check constraint "char_len"
DETAIL:  Failing row contains (Die Hard, 1988, action, Johnny, 132).

-- 16. List three ways to use the schema to restrict what values can be stored in a column.

-- 1. choosing data type - we can restrict what data types can be stored and the length if it's a string, 
--   varchar(1) => allows only a string with max 1 char 
-- 2. CONSTRAINT 
--   CHECK (length(director) > 1)
-- 3. SET DEFAULT direcotor = 'Johny Bravo'
-- 4. NOT NULL Constraint

-- -- 17. Is it possible to define a default value for a column that will be considered invalid by a constraint? Create a table that tests this.

ALTER TABLE films 
  ALTER COLUMN director 
    SET DEFAULT 'a';


INSERT INTO films VALUES (DEFAULT, 1990, 'action', 'johny b', 121);

-- 18. How can you see a list of all of the constraints on a table?

\d tb-name