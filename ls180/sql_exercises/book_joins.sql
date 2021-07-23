-- 1. Connect to the encyclopedia database. Write a query to return all of the country names along with their appropriate continent names.

\c encyclopedia

SELECT countries.name, continents.continent_name
  FROM countries 
  JOIN continents
  ON cuntries.continent_id = continents.id;

-- 2. Write a query to return all of the names and capitals of the European countries.

SELECT countries.name, countries.capital 
  FROM countries 
  JOIN continents
  ON countries.continent_id = continent_id
  WHERE continent.continent_name = 'Europe';

-- 3. Write a query to return the first name of any singer who had an album released under the Warner Bros label.

SELECT DISTINCT singer.first_name
  FROM singers
  JOIN albums 
  ON singers.id = albums.singer_id
  WHERE album.label LIKE '%Warner Bros%';

-- 4. Write a query to return the first name and last name of any singer who released an album in the 80s and who is still living, along with the names of the album that was released and the release date. Order the results by the singer's age (youngest first).

SELECT s.first_name, s.last_name, a.album_name, 
  a.release_date
  FROM singers AS s  
  JOIN albums AS a
  ON s.id = a.singers_id
  WHERE a.released >= '1980-01-01' AND 
        a.released <= '1990-01-01' AND
        singers.deceased = false
  ORDER BY singers.date_of_birth DESC;


  -- 5. Write a query to return the first name and last name of any singer without an associated album entry.

SELECT s.first_name, s.last_name
  FROM singers AS s
  LEFT JOIN albums AS a
  ON s.id = a.singers_id
  WHERE albums.id IS NULL;

-- 6. Rewrite the query for the last question as a sub-query.
  SELECT s.first_name, s.last_name
    FROM singers
    WHERE id NOT IN (
      SELECT singer_id FROM albums 
    );

-- 7. Connect to the ls_burger database. Return a list of all orders and their associated product items.

\c ls_burger

SELECT orders.name 