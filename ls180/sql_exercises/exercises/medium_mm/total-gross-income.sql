 SELECT SUM(services.price) as gross
  FROM customers_services 
    JOIN services
      ON services.id = service_id; 