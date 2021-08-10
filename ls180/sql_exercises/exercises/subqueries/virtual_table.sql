-- Query From a Virtual Table
-- For this exercise, we'll make a slight departure from how we've been using subqueries. We have so far used subqueries to filter our results using a WHERE clause. In this exercise, we will build that filtering into the table that we will query. Write an SQL query that finds the largest number of bids from an individual bidder.

-- For this exercise, you must use a subquery to generate a result table (or virtual table), and then query that table for the largest number of bids.

-- Your output should look like this:

-- Copy Code
--   max
-- ------
--     9
-- (1 row)


finds the largest number of bids from an individual bidder.

EXPLAIN SELECT MAX(bids_count.bids) FROM
  (SELECT bidder_id, COUNT(id) as bids
    FROM bids
    GROUP BY bidder_id) as bids_count;

  
EXPLAIN SELECT COUNT(bidder_id) AS max_bid FROM bids
  GROUP BY bidder_id
  ORDER BY max_bid DESC
  LIMIT 1;