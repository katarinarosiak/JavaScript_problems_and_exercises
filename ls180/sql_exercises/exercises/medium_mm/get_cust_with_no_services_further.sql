SELECT DISTINCT customers.*, services.id, services.description, services.price 
  FROM customers 
    FULL OUTER JOIN customers_services
      ON customers_services.customer_id = customers.id
      FULL OUTER JOIN services 
        ON customers_services.service_id = services.id
        WHERE service_id IS NULL;