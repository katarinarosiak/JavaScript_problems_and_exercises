-- DML/DDL/DCL Part 1
-- SQL consists of 3 different sublanguages. For example, one of these sublanguages is called the Data Control Language (DCL) component of SQL. It is used to control access to a database; it is responsible for defining the rights and roles granted to individual users. Common SQL DCL statements include:

-- Copy Code
-- GRANT
-- REVOKE
-- Name and define the remaining 2 sublanguages, and give at least 2 examples of each.

DML - Data Manipulation Language, This sublanguage is responsible for manipulating data. (retriving, editing, removing). It;s responsible for performing what's called CRUD operations. (Create, Read, Update, Delete)
In SQL each of this operations corresponds to a keyword:
Create - INSERT,
Read - SELECT,
Update - UPDATE,
Delete - DELETE

Example:
INSERT INTO living_room (name, size) 
  VALUES ('living_room', 105)

SELECT * FROM living_room;


DDL - Data Definition Language - this sublanguage is responsible for reating a structure in which data will be held (schema)

CREATE DATABASE house;
CREATE TABLE living_room (
  id serial, 
  name varchar(100)
)
ALTER TABLE living_room 
  ADD COLUMN size int NOT NULL;

DROP TABLE living_room;





DML/DDL/DCL Part 2
Does the following statement use the Data Definition Language (DDL) or the Data Manipulation Language (DML) component of SQL?

Copy Code
SELECT column_name FROM my_table;

This statement uses DML (Data Manipulation Language)


DML/DDL/DCL Part 3
Does the following statement use the DDL or DML component of SQL?

Copy Code
CREATE TABLE things (
  id serial PRIMARY KEY,
  item text NOT NULL UNIQUE,
  material text NOT NULL
);

The following statement uses DDL (Data Definition Language) since it's defining type of information to be stored in the database and not their content. 



DML/DDL/DCL Part 4
Does the following statement use the DDL or DML component of SQL?

Copy Code
ALTER TABLE things
DROP CONSTRAINT things_item_key;

The following statement uses DDL, since it's alters the structure of the database (schema) or its definition, by removing one of the table constraints. It doesn't manipuate the data itself.  



DML/DDL/DCL Part 5
Does the following statement use the DDL or DML component of SQL?

Copy Code
INSERT INTO things VALUES (3, 'Scissors', 'Metal');

The following statement uses DML (Data Manipulation Languege) since it's manipulate the data (inserting data into a table) and not the data definition. 

DML/DDL/DCL Part 6
Does the following statement use the DDL or DML component of SQL?

Copy Code
UPDATE things
SET material = 'plastic'
WHERE item = 'Cup';

The following statement uses DML (Data Manupulation Language) since it manipulates the data and not the defintion of it. This statement alter (UPDATE) the data in the things column. It's chaning the value of metarial to plastink on every row where item = 'Cup'.  


DML/DDL/DCL Part 7
Does the following statement use the DDL, DML, or DCL component of SQL?

Copy Code
\d things

The following statement doesn't use any of the SQL subquery languages. 'd is a psql meta command. 


DML/DDL/DCL Part 8
Does the following statement use the DDL or DML component of SQL?

Copy Code
DELETE FROM things WHERE item = 'Cup';

The following statement uses DML component of SQL, since the command 'DELETE' is altering a table conent by removing the entire 'things' column. It doesn't change the definition of the data. 


DML/DDL/DCL Part 9
Does the following statement use the DDL or DML component of SQL?

Copy Code
DROP DATABASE xyzzy;

The following statement uses DDL component of SQL since the "DROP DATABASE" command remves the entite database thus alterning the definition of the data. , even though the data itself is being removed at the same time. This is only considered as a side effect. 

DML/DDL/DCL Part 10
Does the following statement use the DDL or DML component of SQL?

Copy Code
CREATE SEQUENCE part_number_sequence;

THe following statement uses 