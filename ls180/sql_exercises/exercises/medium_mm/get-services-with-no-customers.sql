-- Get Services With No Customers
-- Using RIGHT OUTER JOIN, write a query to display a list of all services that are not currently in use. Your output should look like this:

SELECT DISTINCT description
  FROM customer_services
  RIGHT OUTER JOIN services
    ON customer_services.service_id = services.id
    WHERE customer_services.service_id IS NULL;