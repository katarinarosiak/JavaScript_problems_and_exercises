SELECT customers.name, string_agg(services.description, ', ') as services 
  FROM customers 
    LEFT OUTER JOIN customers_services
    ON customers.id = customer_id
      LEFT OUTER JOIN services
      ON service_id = services.id
      GROUP BY customers.name, customers.id
      ORDER BY customers.id; 