CREATE DATABASE extrasolar;

CREATE TABLE stars (
  id serial PRIMARY KEY, 
  name varchar(25) UNIQUE NOT NULL,
  distance int NOT NULL CHECK (distance > 0), 
  spectral_type varchar(1),
  companions int NOT NULL CHECK (companions >= 0)
);

CREATE TABLE planets (
  id serial PRIMARY KEY, 
  designation varchar(1),
  mass int
);