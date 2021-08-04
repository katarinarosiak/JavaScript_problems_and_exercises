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



CREATE TABLE employees (
  id serial PRIMARY KEY,
  name varchar(200),
  position varchar(200),
  department varchar(200),
  salary numeric
);

INSERT INTO employees (name, position, department, salary)
  VALUES ('Maggan Ericsson', 'Accountant', 'Accounting', 70.000),
  ('Magnuss Jorgenstein', 'Accountant', 'Accounting', 70.000),
  ('Katarina Ingersson', 'Deputy Director', 'Management', 120.000),
  ('John Fergusson', 'CEO', 'Management', 150.000),
  ('Virginia Johnson', 'Sales-assistant', 'Sales', 60.000),
  ('Tom Smith', 'Sales Manager', 'Sales', 100.000),
  ('Gregory Johnson', 'Salesperson', 'Sales', 70.000),
  ('Victoria Correra', 'Salesperson', 'Sales', 70.000),
  ('Katarina Ingersson', 'Deputy Director', 'Management', 120.000),
  ('John Fergusson', 'CEO', 'Management', 150.000);

  SELECT department FROM employees GROUP BY department;

  SELECT department, SUM(salary) FROM employees GROUP BY department;


SELECT string_agg(name, ', '), department, SUM(salary) FROM employees GROUP BY department;