-- 2. Write the SQL statement needed to create a join table that will allow a film to have multiple directors, and directors to have multiple films. Include an id column in this table, and add foreign key constraints to the other columns.

CREATE TABLE films_directors (
  id serial PRIMARY KEY,
  film_id int REFERENCES films (id),
  director_id int REFERENCES directors (id)
);

INSERT INTO films_directors (film_id, director_id)
  VALUES (1, 1), (2, 2), (3, 3), (4, 4), (5,5), (6,6),
  (7,3), (8,7), (9,8);

ALTER TABLE films_directors 
  ALTER COLUMN film_id SET NOT NULL,
  ALTER COLUMN director_id SET NOT NULL;

ALTER TABLE films DROP COLUMN director_id;

SELECT films.title, directors.name
  FROM films
  INNER JOIN films_directors
    ON films_directors.film_id = films.id
  INNER JOIN directors
    ON directors.id = films_directors.director_id
  ORDER BY films.title ASC;


-- Write SQL statements to insert data for the following films into the database:

INSERT INTO directors (name)
  VALUES ('Joel Coen'), ('Ethan Coen'), ('Frank Miller'), ('Robert Rodriguez');

INSERT INTO films (title, year, genre, duration)
  VALUES ('Fargo',	1996,	'comedy',	98), ('No Country for Old Men',	2007,	'western',	122),
  ('Sin City',	2005,	'crime'	,124), ('Spy Kids',	2001,	'scifi',	88);


INSERT INTO films_directors (film_id, director_id)
  VALUES (11, 9), (12, 9), (12, 10), (13, 11), (13, 12),(14, 12);


-- Write a SQL statement that determines how many films each director in the database has directed. Sort the results by number of films (greatest first) and then name (in alphabetical order).

SELECT directors.name as director, COUNT(films.id) as films
  FROM films 
  INNER JOIN films_directors
    ON films_directors.film_id = films.id
  INNER JOIN directors
    ON directors.id = films_directors.director_idS
  GROUP BY directors.name
  ORDER BY films DESC, directors.name ASC;