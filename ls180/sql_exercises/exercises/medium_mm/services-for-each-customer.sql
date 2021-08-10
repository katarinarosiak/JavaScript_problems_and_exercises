-- Services for each Customer
-- Write a query to display a list of all customer names together with a comma-separated list of the services they use. Your output should look like this:

SELECT customers.name, string_agg(services.description, ', ') as services 
  FROM customers
  LEFT JOIN customer_services
    ON customer_services.customer_id = customers.id
  LEFT JOIN services
    ON services.id = customer_services.service_id
  GROUP BY customers.name;


-- Further Exploration
-- Can you modify the above command so the output looks like this?

SELECT customers.name, string_agg(services.description, E'\n') as services 
  FROM customers
  LEFT JOIN customer_services
    ON customer_services.customer_id = customers.id
  LEFT JOIN services
    ON services.id = customer_services.service_id
  GROUP BY customers.name;



