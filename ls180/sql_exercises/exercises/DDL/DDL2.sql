until Enumerated types


-- Relating Stars and Planets
-- You may have noticed that, when we created the stars and planets tables, we did not do anything to establish a relationship between the two tables. They are simply standalone tables that are related only by the fact that they both belong to the extrasolar database. However, there is no relationship between the rows of each table.

-- To correct this problem, add a star_id column to the planets table; this column will be used to relate each planet in the planets table to its home star in the stars table. Make sure the column is defined in such a way that it is required and must have a value that is present as an id in the stars table.

ALTER TABLE planets 
  ADD COLUMN star_id int NOT NULL REFERENCES stars (id);;




-- Increase Star Name Length
-- Hmm... it turns out that 25 characters isn't enough room to store a star's complete name. For instance, the star "Epsilon Trianguli Australis A" requires 30 characters. Modify the column so that it allows star names as long as 50 characters.

ALTER TABLE stars
  ALTER COLUMN name TYPE varchar(30);



-- Stellar Distance Precision
-- For many of the closest stars, we know the distance from Earth fairly accurately; for instance, Proxima Centauri is roughly 4.3 light years away. Our database, as currently defined, only allows integer distances, so the most accurate value we can enter is 4. Modify the distance column in the stars table so that it allows fractional light years to any degree of precision required.

ALTER TABLE stars
  ALTER COLUMN distance TYPE numeric;



Further Exploration
Assume the stars table already contains one or more rows of data. What will happen when you try to run the above command? To test this, revert the modification and add a row or two of data:

Copy Code
ALTER TABLE stars
ALTER COLUMN distance TYPE integer;

INSERT INTO stars (name, distance, spectral_type, companions)
           VALUES ('Alpha Orionddis', 111, 'M', 9);

ALTER TABLE stars
ALTER COLUMN distance TYPE numeric ;




-- Check Values in List
-- The spectral_type column in the stars table is currently defined as a one-character string that contains one of the following 7 values: 'O', 'B', 'A', 'F', 'G', 'K', and 'M'. However, there is currently no enforcement on the values that may be entered. Add a constraint to the table stars that will enforce the requirement that a row must hold one of the 7 listed values above. Also, make sure that a value is required for this column.

ALTER TABLE stars 
  ALTER COLUMN spectral_type SET CHECK spectral_type SIMILAR TO '(A|F|G|K|M)';   ???????


ALTER TABLE stars
ADD CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M')),
ALTER COLUMN spectral_type SET NOT NULL;


-- Further Exploration
-- Assume the stars table contains one or more rows that are missing a spectral_type value, or that have an illegal value. What will happen when you try to alter the table schema? How would you go about adjusting the data to work around this problem. To test this, revert the modification and add some data:

ALTER TABLE stars
DROP CONSTRAINT stars_spectral_type_check,
ALTER COLUMN spectral_type DROP NOT NULL;

INSERT INTO stars (name, distance, companions)
           VALUES ('Epsilon Eridani', 10.5, 0);

INSERT INTO stars (name, distance, spectral_type, companions)
           VALUES ('Lacaebe 3352', 10.68, '?', 0);

ALTER TABLE stars
ADD CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M', '?')),
ALTER COLUMN spectral_type SET NOT NULL;





UPDATE stars
  SET spectral_type = 'M' WHERE id = 6;




Enumerated Types
In the previous exercise, we added a CHECK constraint to the stars table to enforce that the value stored in the spectral_type column for each row is valid. In this exercise, we will use an alternate approach to the same problem.

PostgreSQL provides what is called an enumerated data type; that is, a data type that must have one of a finite set of values. For instance, a traffic light can be red, green, or yellow: these are enumerate values for the color of the currently lit signal light.

Modify the stars table to remove the CHECK constraint on the spectral_type column, and then modify the spectral_type column so it becomes an enumerated type that restricts it to one of the following 7 values: 'O', 'B', 'A', 'F', 'G', 'K', and 'M'.


ALTER TABLE stars
  DROP CONSTRAINT stars_spectral_type_check;
 
  CREATE TYPE spectral_type AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');

ALTER TABLE stars
  ALTER COLUMN spectral_type TYPE stars_spectral_type_check
                            USING spectral_type::spectral_type_enum;