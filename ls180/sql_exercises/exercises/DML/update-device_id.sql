-- UPDATE device_id
-- -- We've realized that the last two parts we're using for device number 2, "Gyroscope", actually belong to an "Accelerometer". Write an SQL statement that will associate the last two parts from our parts table with an "Accelerometer" instead of a "Gyroscope".

-- UPDATE parts 
--   SET device_id = 1
--   WHERE id = 18 OR id = 17;


UPDATE parts 
  SET device_id = 3
  WHERE part_number = ( SELECT MIN(part_number) 
                          FROM parts );

-- SELECT part_number 
--   FROM parts
--   WHERE part_number IN ( SELECT MIN(part_number) 
--                           as part_number
--                           FROM parts );