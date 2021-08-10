-- Write a query to retrieve the customer data for every customer who does not currently subscribe to any services.

SELECT customers.*
  FROM customers 
    WHERE customers.id NOT IN ( SELECT DISTINCT customer_services.customer_id 
                    FROM customers
                      JOIN  customer_services
                      ON customer_services.customer_id = customers.id);
                      



SELECT customers.* FROM customers
LEFT OUTER JOIN customer_services
             ON customer_id = customers.id
WHERE service_id IS NULL;


-- further exploration 
SELECT customers.*, services.*
  FROM customers
  FULL JOIN customer_services
    ON customer_services.customer_id = customers.id
    FULL JOIN services
    ON services.id = customer_services.service_id
    WHERE customers.id IS NULL OR services.id IS NULL;
