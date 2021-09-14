INSERT INTO customers (name, payment_token)
  VALUES (DEFAULT, 'John Doe', 'EYODHLCN');

INSERT INTO customers_services (customer_id, service_id)
  VALUES (7, 1), (7, 2), (7, 3);