-- Total Gross Income
-- Assuming that everybody in our database has a bill coming due, and that all of them will pay on time, write a query to compute the total gross income we expect to receive.

-- Answer:

-- customers.name, string_agg(services.description, ', '), 

SELECT SUM(price) as sum
  FROM services
  INNER JOIN customer_services
  ON services.id = service_id
  INNER JOIN customers
  ON customers.id = customer_id
  GROUP BY customers.name;
