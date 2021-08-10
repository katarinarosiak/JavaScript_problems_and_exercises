-- Conditional Subqueries: EXISTS
-- Write a SELECT query that returns a list of names of everyone who has bid in the auction. While it is possible (and perhaps easier) to do this with a JOIN clause, we're going to do things differently: use a subquery with the EXISTS clause instead. Here is the expected output:

-- Copy Code
--       name
-- -----------------
--  Alison Walker
--  James Quinn
--  Taylor Williams
--  Alexis Jones
--  Gwen Miller
--  Alan Parker
-- (6 rows)

SELECT name FROM bidders
  WHERE EXISTS (
                SELECT bidder_id FROM bids
                  WHERE bidder_id = bidders.id    
  );

SELECT DISTINCT bidders.name 
  FROM bidders
  INNER JOIN bids 
    ON bidder_id = bidders.id; 