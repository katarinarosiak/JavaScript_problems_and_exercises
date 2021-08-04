-- Planetary Mass Precision
-- We will measure Planetary masses in terms of the mass of Jupiter. As such, the current data type of integer is inappropriate; it is only really useful for planets as large as Jupiter or larger. These days, we know of many extrasolar planets that are smaller than Jupiter, so we need to be able to record fractional parts for the mass. Modify the mass column in the planets table so that it allows fractional masses to any degree of precision required. In addition, make sure the mass is required and positive.

-- While we're at it, also make the designation column required.

ALTER TABLE planets
  ALTER COLUMN mass TYPE numeric,
  ADD CHECK (mass > 0.0), 
  ALTER COLUMN mass SET NOT NULL,
  ALTER COLUMN designation SET NOT NULL;

