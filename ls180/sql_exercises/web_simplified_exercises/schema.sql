CREATE DATABASE record_company;

CREATE TABLE bands (
  id serial,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE albums (
  id serial,
  name VARCHAR(255) NOT NULL,
  release_year INT,
  band_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (band_id) 
  REFERENCES bands(id)
);

