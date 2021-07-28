-- 1. Load this file into your database.

-- What does the file do?
-- What is the output of the command? What does each line in this output mean?
-- Open up the file and look at its contents. What does the first line do?

The file first check if the table exist and if it does it uses `DROP TABLE` command to delete the table. 
In this case there is not table called public.films

Next the file create a table with title, year and genre as names of columns
Next the file uses INSERT INTO command to add data to the table. 

The output of the commands are :
psql:films1.sql:1: NOTICE:  table "films" does not exist, skipping
DROP TABLE
CREATE TABLE
INSERT 0 1
INSERT 0 1
INSERT 0 1

The first line: psql:films1.sql:1: NOTICE:  table "films" does not exist, skipping means that the table named 'films' doesn't exist yet. the ommand asked to drop the table if it exist. The output informs us that the table doens't exist and the command has been 'skipped' 

Next output: DROP TABLE is simply an answer to the first command. However the command has never been performed and there is not table being dropped at this point. 

CREATE TABLE - create a table named 'films' with specified schema. 

Next three lines inform that the specified data has been inserted into the columns. 

-- 2. Write a SQL statement that returns all rows in the films table.

SELECT * FROM films;

-- 3. Write a SQL statement that returns all rows in the films table with a title shorter than 12 letters.

SELECT * FROM films WHERE length(title) < 12;

-- 4. Write the SQL statements needed to add two additional columns to the films table: director, which will hold a director's full name, and duration, which will hold the length of the film in minutes.

ALTER TABLE films
  ADD COLUMN director varchar(255),
  ADD COLUMN duration int;

-- 5. Write SQL statements to update the existing rows in the database with values for the new columns:

UPDATE films 
  SET director = 'John McTiernan', 
      duration = 132
  WHERE title='Die Hard';

UPDATE films 
  SET director = 'Michael Curtiz',
      duration = 102
  WHERE title='Casablanca';

UPDATE films 
  SET director = 'Franix Ford Coppola',
      duration = 113
  WHERE title='The Conversation';

  -- 6. Write SQL statements to insert the following data into the films table:
INSERT INTO films
  VALUES ('1984', 1956,	'scifi',	'Michael Anderson',	90),
('Tinker Tailor Soldier Spy',	2011, 'espionage',	'Tomas Alfredson',	127),
('The Birdcage',	1996,	'comedy',	'Mike Nichols',	118);

-- 7. Write a SQL statement that will return the title and age in years of each movie, with newest movies listed first:

SELECT title, extract("year" from current_date) - year AS age FROM films ORDER BY year DESC;

-- 8. Write a SQL statement that will return the title and duration of each movie longer than two hours, with the longest movies first.

SELECT title, duration FROM films WHERE duration > 120 ORDER BY duration DESC;

-- 9. Write a SQL statement that returns the title of the longest film.

SELECT title FROM films ORDER BY duration DESC LIMIT 1;