-- Write a query to retrieve the customer data for every customer who currently subscribes to at least one service.

SELECT customers.name, COUNT(services.id) AS services
  FROM customers
    INNER JOIN customer_services
    ON customer_services.customer_id = customers.id
    INNER JOIN services
    ON services.id = customer_services.service_id
    GROUP BY customers.name
    HAVING COUNT(services.id) >= 1
    ORDER BY COUNT(services.id), customers.name;

-- or whole row   
  SELECT DISTINCT customers.* 
    FROM customers 
    INNER JOIN customer_services
    ON customer_services.customer_id = customers.id
