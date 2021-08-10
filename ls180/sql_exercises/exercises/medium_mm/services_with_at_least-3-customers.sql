-- Services With At Least 3 Customers
-- Write a query that displays the description for every service that is subscribed to by at least 3 customers. Include the customer count for each description in the report. The report should look like this:

SELECT description, COUNT(customer_id)
  FROM services
  INNER JOIN customer_services
  ON services.id = service_id
  INNER JOIN customers
  ON customers.id = customer_id
  GROUP BY description
  HAVING COUNT(customer_id) >= 3;