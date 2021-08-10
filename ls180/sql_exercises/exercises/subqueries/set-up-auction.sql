CREATE TABLE bidders (
  id serial PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE items (
  id serial PRIMARY KEY,
  name text NOT NULL,
  initial_price decimal(6,2) NOT NULL CHECK (initial_price BETWEEN 0.01 AND 1000.00),
  sales_price decimal(6,2) CHECK (sales_price BETWEEN 0.01 AND 1000.00)
);

CREATE TABLE bids (
  id serial PRIMARY KEY,
  bidder_id integer NOT NULL REFERENCES bidders (id) ON DELETE CASCADE,
  item_id integer NOT NULL REFERENCES items (id) ON DELETE CASCADE,
  amount decimal(6,2) NOT NULL CHECK (amount BETWEEN 0.01 AND 1000.00)
);

CREATE INDEX bids_index ON bids (bidder_id, item_id);  

\COPY bidders FROM 'bidders.csv' WITH HEADER CSV;
\COPY items FROM 'items.csv' WITH HEADER CSV;
\COPY bids FROM 'bids.csv' WITH HEADER CSV;

