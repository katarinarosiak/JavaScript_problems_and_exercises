-- 1. The books_categories table from this database was created with foreign keys that don't have the NOT NULL and ON DELETE CASCADE constraints. Go ahead and add them now.

ALTER TABLE books_categories
  ALTER COLUMN book_id SET NOT NULL,
  ALTER COLUMN category_id SET NOT NULL,

ALTER TABLE books_categories
  DROP CONSTRAINT "books_categories_book_id_fkey",
  ADD CONSTRAINT "books_categories_book_id_fkey" 
  FOREIGN KEY ("book_id")
  REFERENCES book(id)
  ON DELETE CASCADE;
  

ALTER TABLE books_categories
  DROP CONSTRAINT "books_categories_book_id_fkey";
  ADD CONSTRAINT "books_categories_book_id_fkey" 
  REFERENCES categories(id) 
  ON DELETE CASCADE;


-- 2. Write a SQL statement that will return the following result:

SELECT books.id, author, string_agg(name, ', ') as categories
  FROM books 
  JOIN books_categories
  ON books.id = books_categories.book_id
  JOIN categories
  ON categories.id = books_categories.category_id
  GROUP BY books.id;




-- 3. Write SQL statements to insert the following new books into the database. What do you need to do to ensure this data fits in the database?

ALTER TABLE books
  ALTER COLUMN title TYPE text;

ALTER TABLE books
  ALTER COLUMN author TYPE text;

INSERT INTO books (author, title)
  VALUES ('Lynn Sherr',	'Sally Ride: America''s First Woman in Space'),
  ('Charlotte Brontë',	'Jane Eyre'),
  ('Meeru Dhalwala and Vikram Vij',	'Vij''s: Elegant and Inspired Indian Cuisine');

INSERT INTO categories (name)
  VALUES ('Space Exploration'), ('Cookbook'), ('South Asia');

INSERT INTO books_categories (book_id, category_id)
  VALUES (4, 5),(4, 1), (4, 7), (5, 2), (5, 4), (6, 8), (6, 1), (6,9);

-- 4. Write a SQL statement to add a uniqueness constraint on the combination of columns book_id and category_id of the books_categories table. This constraint should be a table constraint; so, it should check for uniqueness on the combination of book_id and category_id across all rows of the books_categories table.

ALTER TABLE books_categories
  ADD UNIQUE (book_id, category_id);  


-- Write a SQL statement that will return the following result:

SELECT categories.name, COUNT(categories.id) as book_count, string_agg(books.title, ', ') as book_titles
  FROM categories 
  INNER JOIN books_categories
  ON books_categories.category_id = categories.id 
  INNER JOIN books 
  ON books.id = books_categories.book_id
    GROUP BY categories.name
    ORDER BY categories.name;