1. Create a Songs Table

CREATE TABLE songs (
  id serial, 
  name varchar(100) NOT NULL,
  length decimal(4,2) NOT NULL,
  album_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (album_id) 
    REFERENCES albums (id)
);

2. Select only the Names of all the Bands

SELECT name AS band_name FROM bands;

3.  Select the Oldest Album

SELECT * FROM albums ORDER BY release_year ASC FETCH FIRST 1 ROW ONLY; 

4. Get all Bands that have Albums

SELECT DISTINCT bands.name AS band_name
FROM bands 
JOIN albums 
ON bands.id = albums.band_id; 



