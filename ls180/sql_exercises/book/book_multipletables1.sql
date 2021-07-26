-- Make sure you are connected to the encyclopedia database. We want to hold the continent data in a separate table from the country data.

-- Create a continents table with an auto-incrementing id column (set as the Primary Key), and a continent_name column which can hold the same data as the continent column from the countries table.
-- Remove the continent column from the countries table.
-- Add a continent_id column to the countries table of type integer.
-- Add a Foreign Key constraint to the continent_id column which references the id field of the continents table.

CREATE TABLE continents (
  id serial PRIMARY KEY,
  continent_name varchar(50),    
);

ALTER TABLE countries 
  DROP COLUMN continent;


ALTER TABLE countries 
  ADD COLUMN continent_id INT; 


ALTER TABLE countries 
  ADD FOREIGN KEY (continent_id)
    REFERENCES continents(id);

