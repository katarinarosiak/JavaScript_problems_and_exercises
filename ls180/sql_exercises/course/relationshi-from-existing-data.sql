CREATE TABLE directors (
  id serial,
  first_name varchar(150),
  last_name varchar(200)
);

INSERT INTO directors (first_name, last_name)
  VALUES ('John', 'McTiernan'), ('Michael', 'Curtiz'), ('Francis Ford', 'Coppola'),
  ('Michael', 'Anderson'), ('Tomas', 'Alfredson'), ('Mike', 'Nichols');

ALTER TABLE directors ADD PRIMARY KEY (id); 

ALTER TABLE films
  ADD COLUMN director_id int REFERENCES directors (id);

UPDATE films 
  SET director_id = 1
    WHERE director = 'John McTiernan';

UPDATE films 
  SET director_id = 2
    WHERE director = 'Michael Curtiz';

UPDATE films 
  SET director_id = 3
    WHERE director = 'Francis Ford Coppola';

UPDATE films 
  SET director_id = 4
    WHERE director = 'Michael Anderson';

UPDATE films 
  SET director_id = 5
    WHERE director = 'Tomas Alfredson';

UPDATE films 
  SET director_id = 6
    WHERE director = 'Mike Nichols';


ALTER TABLE films 
  ALTER COLUMN director_id SET NOT NULL; 

ALTER TABLE films
  DROP COLUMN director;


ALTER TABLE directors
   ADD CONSTRAINT valid_name
    CHECK (length(first_name) >= 1); 


ALTER TABLE directors
   ADD CONSTRAINT valid_name
    CHECK (length(last_name) >= 1); 

