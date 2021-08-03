-- 1. Write a SQL statement to add the following call data to the database: 

INSERT INTO calls ("when", duration, contact_id)
  VALUES ('2016-01-18 14:47:00', 632, 6);

-- 2. Write a SQL statement to retrieve the call times, duration, and first name for all calls not made to William Swift.

SELECT calls.when, calls.duration, contacts.first_name 
  FROM calls 
  JOIN contacts
  ON calls.contact_id = contacts.id
    WHERE first_name <> 'William' AND last_name <> 'Swift';

-- 3. Write SQL statements to add the following call data to the database:

INSERT INTO contacts (first_name, last_name, number)
  VALUES ('Merve'	,'Elk',	6343511126), ('Sawa',	'Fyodorov',	6125594874);

INSERT INTO calls ("when", duration, contact_id)
  VALUES ('2016-01-17 11:52:00',	175, 26), ('2016-01-18 21:22:00',	79, 27);

-- 4. Add a constraint to contacts that prevents a duplicate value being added in the column number.

//?????
ALTER TABLE contacts 
  ALTER COLUMN number ADD CONSTRAINT no_duplicates UNIQUE;

ALTER TABLE contacts
  ADD CONSTRAINT no_duplicates UNIQUE (number);

-- 5. Write a SQL statement that attempts to insert a duplicate number for a new contact but fails. What error is shown?

INSERT INTO contacts (first_name, last_name, number)
  VALUES ('Elton', 'John', 6125594874);


ERROR:  duplicate key value violates unique constraint "no_duplicates"
DETAIL:  Key (number)=(6125594874) already exists.

-- 6. Why does "when" need to be quoted in many of the queries in this lesson?

Because 'when' is a reserved kewords and cannot be used as a name of the column. If we would use it without the quote we would get an error. 

-- 7. Draw an entity-relationship diagram for the data we've been working with in this assignment.

