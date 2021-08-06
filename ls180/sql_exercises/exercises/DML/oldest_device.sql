-- Oldest Device
-- Insert one more device into the devices table. You may use this SQL statement or create your own.

-- Copy Code
-- INSERT INTO devices (name) VALUES ('Magnetometer');
-- INSERT INTO parts (part_number, device_id) VALUES (42, 3);
-- Assuming nothing about the existing order of the records in the database, write an SQL statement that will return the name of the oldest device from our devices table.

-- INSERT INTO devices (name) 
--   VALUES ('Magnetometer');

-- INSERT INTO parts (part_number, device_id) VALUES (42, 3);

SELECT name as oldest_device, created_at
  FROM devices 
  ORDER BY created_at ASC 
  LIMIT 1;