-- 2. Update the orders table so that referential integrity will be preserved for the data between orders and products.

ALTER TABLE orders
  ADD CONSTRAINT orders_products_id_fk FOREIGN KEY (product_id) REFERENCES products(id);

  -- 3. Use psql to insert the data shown in the following table into the database:

  INSERT INTO products (name)
    VALUES ('small bolt'), ('large bolt');

  INSERT INTO orders (product_id, quantity)
    VALUES (1, 10), (1, 25), (2, 15);

    -- 4. Write a SQL statement that returns a result like this:

    SELECT quantity, name
      FROM orders as o
      INNER JOIN products as p  
      ON o.product_id = p.id; 

      -- 5. Can you insert a row into orders without a product_id? Write a SQL statement to prove your answer.

      INSERT INTO orders (quantity)
        VALUES (10);
  
-- 6. Write a SQL statement that will prevent NULL values from being stored in orders.product_id. What happens if you execute that statement?

ALTER TABLE orders 
  ALTER COLUMN product_id SET NOT NULL;

-- 7. Make any changes needed to avoid the error message encountered in #6.

DELETE FROM orders WHERE id=4;

-- 8. Create a new table called reviews to store the data shown below. This table should include a primary key and a reference to the products table.

CREATE TABLE reviews (
  id serial,
  product_id int,
  review text
  PRIMARY KEY (id),
  FOREIGN KEY (product_id)
    REFERENCES products (id)
)

CREATE TABLE reviews (
  id serial PRIMARY KEY,
  body text NOT NULL,
  product_id integer REFERENCES products (id)
);

-- 9. Write SQL statements to insert the data shown in the table in #8.

INSERT INTO reviews (product_id, review)
  VALUES (1, 'a little small'), (1, 'very round!'), (2, 'could have been smaller');

  -- 10. True or false: A foreign key constraint prevents NULL values from being stored in a column.

  NO, 