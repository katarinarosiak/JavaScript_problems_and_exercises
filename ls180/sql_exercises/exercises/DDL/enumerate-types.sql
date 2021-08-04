ALTER TABLE stars 
  DROP CONSTRAINT stars_spectral_type_check;

CREATE TYPE spectraltp as ENUM ('O', 'B', 'A', 'F', 'G', 'K','M');

ALTER TABLE stars 
  ALTER COLUMN spectral_type TYPE pectraltp
                              USING spectral_type::spectraltp;