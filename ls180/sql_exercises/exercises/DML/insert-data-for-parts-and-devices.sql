-- Insert Data for Parts and Devices
-- Now that we have the infrastructure for our workshop set up, let's start adding in some data. Add in two different devices. One should be named, "Accelerometer". The other should be named, "Gyroscope".

-- The first device should have 3 parts (this is grossly simplified). The second device should have 5 parts. The part numbers may be any number between 1 and 10000. There should also be 3 parts that don't belong to any device yet.

INSERT INTO devices (name)
  VALUES ('Accelerometer'), ('Gyroscope');

INSERT INTO parts (part_number, device_id)
  VALUES (897, 1), (732, 1), (712, 1), (431,2),
  (64,2),(2,2),(23,2),(6511,2), (31, NULL), 
  (433, NULL), (71, NULL);