-- 1. Write SQL statements that will insert the following films into the database:

INSERT INTO films 
  VALUES ('Wayne''s World',	1992,	'comedy',	'Penelope Spheeris',	95)
('Bourne Identity',	2002,	'espionage	Doug Liman',	118 );

-- 2. Write a SQL query that lists all genres for which there is a movie in the films table.

SELECT DISTINCT genre FROM films;

-- 3. Write a SQL query that returns the same results as the answer for #3, but without using DISTINCT.

SELECT genre FROM films GROUP BY genre; 

-- 4. Write a SQL query that determines the average duration across all the movies in the films table, rounded to the nearest minute.

SELECT ROUND(avg(duration)) FROM films;

-- 5.Write a SQL query that determines the average duration for each genre in the films table, rounded to the nearest minute.

SELECT genre, ROUND(avg(duration)) AS average_duration FROM films GROUP BY genre ORDER BY average_duration DESC;

-- 7. Write a SQL query that determines the average duration of movies for each decade represented in the films table, rounded to the nearest minute and listed in chronological order.

SELECT year / 10 * 10 AS decade, ROUND(avg(duration)) AS average_duration FROM films GROUP BY decade ORDER BY decade;

-- 8. Write a SQL query that finds all films whose director has the first name John.

SELECT * FROM films WHERE SUBSTRING(director,0,POSITION(' ' in director)) = 'John';

-- 9. Write a SQL query that will return the following data:

SELECT genre, COUNT(films.id) as count FROM films GROUP BY genre ORDER BY count DESC;

-- 10. Write a SQL query that will return the following data:

SELECT (year / 10 * 10) as decade, genre, string_agg(title, ', ') as films
  FROM films GROUP BY decade, genre ORDER BY decade, genre;  

  -- 11. Write a SQL query that will return the following data:

  SELECT genre, sum(duration) as total_duration 
    FROM films GROUP BY genre  ORDER BY total_duration, genre ASC;